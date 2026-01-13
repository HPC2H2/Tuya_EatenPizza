/*****************************************************************************
* | File      	:   DEV_Config.c
* | Author      :   Waveshare team, HPC2H2
* | Function    :   Hardware underlying interface
* | Info        :
*----------------
* |	This version:   V1.0
* | Date        :   2026-01-13
* | Info        :   
* -----------------------------------------------------------------------------
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documnetation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to  whom the Software is
# furished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS OR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.
#
******************************************************************************/
#include "DEV_Config.h"

/*GPIO output init*/
TUYA_GPIO_BASE_CFG_T out_pin_cfg = {
    .mode = TUYA_GPIO_PUSH_PULL, 
    .direct = TUYA_GPIO_OUTPUT, 
    .level = TUYA_GPIO_LEVEL_LOW};

/*GPIO input init*/
TUYA_GPIO_BASE_CFG_T in_pin_cfg = {
    .mode = TUYA_GPIO_PULLUP,
    .direct = TUYA_GPIO_INPUT,
};

/**
 * GPIO read and write
**/
void DEV_Digital_Write(UWORD Pin, UBYTE Value)
{
    tkl_gpio_write(Pin, Value);
}

UBYTE DEV_Digital_Read(UWORD Pin)
{
    TUYA_GPIO_LEVEL_E read_level = 0;

    tkl_gpio_read(Pin, &read_level);

    if(read_level == TUYA_GPIO_LEVEL_LOW)
        return 0;
    else
        return 1;
}

/**
 * SPI
**/
void DEV_SPI_WriteByte(uint8_t Value)
{
    tkl_spi_send(SPI_ID, &Value, 1);
}

/**
 * 1.13 Precise microsecond delay
 * Using calibrated delay loop - adjust multiplier based on actual CPU frequency
 * For 80MHz CPU: ~80 cycles per microsecond, each loop iteration ~2-4 cycles
 * Calibration: If display still doesn't work, try increasing the multiplier (e.g., 60, 80, 100)
**/
static void DEV_Delay_us(UDOUBLE xus)
{
    volatile UDOUBLE i;
    // Calibrated for typical MCU: adjust this multiplier based on your CPU frequency
    // For 80MHz: try 40-60, for 160MHz: try 80-100
    // If timing is too fast, increase this value
    UDOUBLE loop_count = xus * 100; // Increased for better accuracy - adjust if needed
    for(i = 0; i < loop_count; i++) {
        __asm__ __volatile__("nop");
    }
}

/**
 * SPI write command using GPIO simulation (matches Arduino SPI4W_WriteCom exactly)
 * Sets DC pin LOW internally, CS should be controlled by caller
**/
void DEV_SPI_WriteCom_NoCS(UBYTE Value)
{
    UBYTE i, j = Value;
    
    DEV_GPIO_Mode(EPD_MOSI_PIN, 1);
    DEV_Digital_Write(EPD_SCLK_PIN, 0);
    DEV_Delay_us(2);
    DEV_Digital_Write(EPD_DC_PIN, 0);  // DC LOW for command
    DEV_Delay_us(2);
    
    for(i = 0; i < 8; i++) {
        if (j & 0x80) {
            DEV_Digital_Write(EPD_MOSI_PIN, 1);
        } else {
            DEV_Digital_Write(EPD_MOSI_PIN, 0);
        }
        DEV_Delay_us(1);
        DEV_Digital_Write(EPD_SCLK_PIN, 1);
        DEV_Delay_us(2);
        DEV_Digital_Write(EPD_SCLK_PIN, 0);
        j = j << 1;
    }
    DEV_Delay_us(2);
}

/**
 * SPI write data using GPIO simulation (matches Arduino SPI4W_WriteData exactly)
 * Sets DC pin HIGH internally, CS should be controlled by caller
**/
void DEV_SPI_WriteData_NoCS(UBYTE Value)
{
    UBYTE i, j = Value;
    
    DEV_GPIO_Mode(EPD_MOSI_PIN, 1);
    DEV_Digital_Write(EPD_SCLK_PIN, 0);
    DEV_Delay_us(2);
    DEV_Digital_Write(EPD_DC_PIN, 1);  // DC HIGH for data
    DEV_Delay_us(2);
    
    for(i = 0; i < 8; i++) {
        if (j & 0x80) {
            DEV_Digital_Write(EPD_MOSI_PIN, 1);
        } else {
            DEV_Digital_Write(EPD_MOSI_PIN, 0);
        }
        DEV_Delay_us(1);
        DEV_Digital_Write(EPD_SCLK_PIN, 1);
        DEV_Delay_us(2);
        DEV_Digital_Write(EPD_SCLK_PIN, 0);
        j = j << 1;
    }
    DEV_Delay_us(2);
}

void DEV_SPI_Write_nByte(uint8_t *pData, uint32_t Len)
{
    tkl_spi_send(SPI_ID, pData, Len);
}

/**
 * GPIO Mode
**/
void DEV_GPIO_Mode(UWORD Pin, UWORD Mode)
{
    if(Mode == 0) {
		tkl_gpio_init(Pin, &in_pin_cfg);
	} else {
		tkl_gpio_init(Pin, &out_pin_cfg);
	}
}

/**
 * delay x ms
**/
void DEV_Delay_ms(UDOUBLE xms)
{
    tal_system_sleep(xms);
}

void DEV_GPIO_Init(void)
{
    DEV_GPIO_Mode(EPD_BUSY_PIN, 0);
	DEV_GPIO_Mode(EPD_RST_PIN, 1);
	DEV_GPIO_Mode(EPD_DC_PIN, 1);
	DEV_GPIO_Mode(EPD_CS_PIN, 1);
	DEV_GPIO_Mode(EPD_CS2_PIN, 1);
	DEV_GPIO_Mode(EPD_MS_PIN, 1);
    // DEV_GPIO_Mode(EPD_MOSI_PIN, 0);
	// DEV_GPIO_Mode(EPD_SCLK_PIN, 1);

	DEV_Digital_Write(EPD_CS_PIN, 1);
	DEV_Digital_Write(EPD_CS2_PIN, 1);
	DEV_Digital_Write(EPD_MS_PIN, 1);
    
}

void DEV_SPI_SendnData(UBYTE *Reg)
{
    UDOUBLE size;
    size = sizeof(Reg);
    for(UDOUBLE i=0 ; i<size ; i++)
    {
        DEV_SPI_SendData(Reg[i]);
    }
}

void DEV_SPI_SendData(UBYTE Reg)
{
	UBYTE i,j=Reg;
	DEV_GPIO_Mode(EPD_MOSI_PIN, 1);
	DEV_Digital_Write(EPD_CS_PIN, 0);
	for(i = 0; i<8; i++)
    {
        DEV_Digital_Write(EPD_SCLK_PIN, 0);     
        if (j & 0x80)
        {
            DEV_Digital_Write(EPD_MOSI_PIN, 1);
        }
        else
        {
            DEV_Digital_Write(EPD_MOSI_PIN, 0);
        }
        
        DEV_Digital_Write(EPD_SCLK_PIN, 1);
        j = j << 1;
    }
	DEV_Digital_Write(EPD_SCLK_PIN, 0);
	DEV_Digital_Write(EPD_CS_PIN, 1);
}

UBYTE DEV_SPI_ReadData()
{
	UBYTE i,j=0xff;
	DEV_GPIO_Mode(EPD_MOSI_PIN, 0);
	DEV_Digital_Write(EPD_CS_PIN, 0);
	for(i = 0; i<8; i++)
	{
		DEV_Digital_Write(EPD_SCLK_PIN, 0);
		j = j << 1;
		if (DEV_Digital_Read(EPD_MOSI_PIN))
		{
				j = j | 0x01;
		}
		else
		{
				j= j & 0xfe;
		}
		DEV_Digital_Write(EPD_SCLK_PIN, 1);
	}
	DEV_Digital_Write(EPD_SCLK_PIN, 0);
	DEV_Digital_Write(EPD_CS_PIN, 1);
	return j;
}

UBYTE DEV_Module_Init(void)
{
    printf("/***********************************/ \r\n");
    /*spi init*/
    TUYA_SPI_BASE_CFG_T spi_cfg = {.mode = TUYA_SPI_MODE0,
                                   .freq_hz = SPI_FREQ,
                                   .databits = TUYA_SPI_DATA_BIT8,
                                   .bitorder = TUYA_SPI_ORDER_MSB2LSB,
                                   .role = TUYA_SPI_ROLE_MASTER,
                                   .type = TUYA_SPI_SOFT_ONE_WIRE_TYPE};
    tkl_spi_init(SPI_ID, &spi_cfg);

    DEV_GPIO_Init();
    printf("/***********************************/ \r\n");
	return 0;
}

void DEV_Module_Exit(void)
{
    tkl_spi_deinit(SPI_ID);
    tkl_gpio_deinit(EPD_SCLK_PIN);
    tkl_gpio_deinit(EPD_MOSI_PIN);
    tkl_gpio_deinit(EPD_CS_PIN);
    tkl_gpio_deinit(EPD_CS2_PIN);
    tkl_gpio_deinit(EPD_DC_PIN);
    tkl_gpio_deinit(EPD_RST_PIN);
    tkl_gpio_deinit(EPD_BUSY_PIN);
    tkl_gpio_deinit(EPD_MS_PIN);
}
