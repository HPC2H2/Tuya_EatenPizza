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

/* TuyaOpen's T5 public microsecond wrapper is currently a no-op. */
extern void bk_delay_us(uint32_t us);

static UBYTE s_sda_is_output = 0;

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
    DEV_SPI_WriteData_NoCS(Value);
}

/* Precise T5 platform microsecond delay. */
void DEV_Delay_us(UDOUBLE xus)
{
    bk_delay_us(xus);
}

static void DEV_SPI_SetSdaOutput(void)
{
    if (!s_sda_is_output) {
        DEV_GPIO_Mode(EPD_MOSI_PIN, 1);
        s_sda_is_output = 1;
    }
}

static void DEV_SPI_SetSdaInput(void)
{
    if (s_sda_is_output) {
        DEV_GPIO_Mode(EPD_MOSI_PIN, 0);
        s_sda_is_output = 0;
    }
}

/**
 * SPI write command using GPIO simulation (matches Arduino SPI4W_WriteCom exactly)
 * Sets DC pin LOW internally, CS should be controlled by caller
**/
void DEV_SPI_WriteCom_NoCS(UBYTE Value)
{
    UBYTE i, j = Value;
    
    DEV_SPI_SetSdaOutput();
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
    
    DEV_SPI_SetSdaOutput();
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
    uint32_t i;

    if (pData == NULL) {
        return;
    }

    for (i = 0; i < Len; i++) {
        DEV_SPI_WriteData_NoCS(pData[i]);
    }
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
	DEV_GPIO_Mode(EPD_SCLK_PIN, 1);
	DEV_GPIO_Mode(EPD_MOSI_PIN, 1);
	s_sda_is_output = 1;

	DEV_Digital_Write(EPD_RST_PIN, 1);
	DEV_Digital_Write(EPD_DC_PIN, 1);
	DEV_Digital_Write(EPD_CS_PIN, 1);
	DEV_Digital_Write(EPD_CS2_PIN, 1);
	DEV_Digital_Write(EPD_MS_PIN, 1);
	DEV_Digital_Write(EPD_SCLK_PIN, 0);
	DEV_Digital_Write(EPD_MOSI_PIN, 1);
}

void DEV_SPI_SendnData(const UBYTE *Reg, UDOUBLE Len)
{
    if (Reg == NULL) {
        return;
    }

    for(UDOUBLE i=0 ; i<Len ; i++)
    {
        DEV_SPI_SendData(Reg[i]);
    }
}

void DEV_SPI_SendData(UBYTE Reg)
{
	UBYTE i,j=Reg;
	DEV_SPI_SetSdaOutput();
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
	UBYTE i,j=0;
	DEV_SPI_SetSdaInput();
	DEV_Digital_Write(EPD_SCLK_PIN, 0);
	DEV_Delay_us(2);
	DEV_Digital_Write(EPD_DC_PIN, 1);
	DEV_Delay_us(2);
	for(i = 0; i<8; i++)
	{
		DEV_Digital_Write(EPD_SCLK_PIN, 1);
		DEV_Delay_us(2);
		j = j << 1;
		if (DEV_Digital_Read(EPD_MOSI_PIN))
		{
			j = j | 0x01;
		}
		DEV_Delay_us(1);
		DEV_Digital_Write(EPD_SCLK_PIN, 0);
		DEV_Delay_us(2);
	}
	DEV_Delay_us(2);
	DEV_SPI_SetSdaOutput();
	return j;
}

UBYTE DEV_Module_Init(void)
{
    printf("/***********************************/ \r\n");
    /* P6/P7 are driven as GPIO.  T5 SPI1 uses P2/P3/P4/P5 and would collide
     * with this board's DC/MS/CSB2 wiring. */
    DEV_GPIO_Init();
    printf("/***********************************/ \r\n");
	return 0;
}

void DEV_Module_Exit(void)
{
    tkl_gpio_deinit(EPD_SCLK_PIN);
    tkl_gpio_deinit(EPD_MOSI_PIN);
    tkl_gpio_deinit(EPD_CS_PIN);
    tkl_gpio_deinit(EPD_CS2_PIN);
    tkl_gpio_deinit(EPD_DC_PIN);
    tkl_gpio_deinit(EPD_RST_PIN);
    tkl_gpio_deinit(EPD_BUSY_PIN);
    tkl_gpio_deinit(EPD_MS_PIN);
}
