/*****************************************************************************
* | File      	:   EPD_1in69_E6.c
* | Author      :   Waveshare team, Good Display, HPC2H2
* | Function    :   1.69inch e-paper E6 (Color Round)
* | Info        :
*----------------
* |	This version:   V1.0
* | Date        :   2026-01-13
* | Info        :
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
#include "EPD_1in69_E6.h"
#include "Debug.h"

// 全局变量
static unsigned char Temptr_Cur = 0;
static unsigned char OTP_PWR[5] = {0};

#define EPD_BUSY_TIMEOUT_MS 120000U

/******************************************************************************
function :	Software reset
parameter:
******************************************************************************/
static void EPD_1IN69_E6_Reset(void)
{
    DEV_Digital_Write(EPD_RST_PIN, 1);
    DEV_Delay_ms(30);
    DEV_Digital_Write(EPD_RST_PIN, 0);
    DEV_Delay_ms(30);
    DEV_Digital_Write(EPD_RST_PIN, 1);
    DEV_Delay_ms(100);
    Debug("Reset completed\r\n");
}

/******************************************************************************
function :	Wait until the busy_pin goes HIGH
parameter:
******************************************************************************/
static void EPD_1IN69_E6_ReadBusy(void)
{
    UDOUBLE elapsed_ms = 0;

    Debug("e-Paper busy\r\n");
    while (DEV_Digital_Read(EPD_BUSY_PIN) == 0) { // 低电平为忙碌，高电平为空闲
        DEV_Delay_ms(1);
        elapsed_ms++;
        if (elapsed_ms >= EPD_BUSY_TIMEOUT_MS) {
            Debug("ERROR: e-Paper BUSY timeout (check BUSY, 3V3 and GND)\r\n");
            return;
        }
    }
    Debug("e-Paper busy release\r\n");
}

/******************************************************************************
function :	SPI write command
parameter:
     MS_opt : Master/Slave selection (0=MASTER_ONLY, 1=SLAVE_ONLY, 2=MASTER_SLAVE)
     Reg : Command register
******************************************************************************/
static void EPD_1IN69_E6_MsDev_WriteCom(UBYTE MS_opt, UBYTE Reg)
{
    // 1.13 Select CS pins (matching Arduino MsDev_WriteCom)
    if (MS_opt == MASTER_ONLY) {
        DEV_Digital_Write(EPD_CS_PIN, 0);
        DEV_Digital_Write(EPD_CS2_PIN, 1);
    } else if (MS_opt == SLAVE_ONLY) {
        DEV_Digital_Write(EPD_CS_PIN, 1);
        DEV_Digital_Write(EPD_CS2_PIN, 0);
    } else { // MASTER_SLAVE
        DEV_Digital_Write(EPD_CS_PIN, 0);
        DEV_Digital_Write(EPD_CS2_PIN, 0);
    }

    DEV_Delay_us(10);

    // 1.13 SPI write command (DC pin is set inside DEV_SPI_WriteCom_NoCS)
    DEV_SPI_WriteCom_NoCS(Reg);

    DEV_Delay_us(10);
    DEV_Digital_Write(EPD_CS_PIN, 1);
    DEV_Digital_Write(EPD_CS2_PIN, 1);
    DEV_Delay_us(10);
}

/******************************************************************************
function :	SPI write data
parameter:
     MS_opt : Master/Slave selection
     Data : Write data
******************************************************************************/
static void EPD_1IN69_E6_MsDev_WriteData(UBYTE MS_opt, UBYTE Data)
{
    // 1.13 Select CS pins (matching Arduino MsDev_WriteData)
    if (MS_opt == MASTER_ONLY) {
        DEV_Digital_Write(EPD_CS_PIN, 0);
        DEV_Digital_Write(EPD_CS2_PIN, 1);
    } else if (MS_opt == SLAVE_ONLY) {
        DEV_Digital_Write(EPD_CS_PIN, 1);
        DEV_Digital_Write(EPD_CS2_PIN, 0);
    } else { // MASTER_SLAVE
        DEV_Digital_Write(EPD_CS_PIN, 0);
        DEV_Digital_Write(EPD_CS2_PIN, 0);
    }

    DEV_Delay_us(10);

    // 1.13 SPI write data (DC pin is set inside DEV_SPI_WriteData_NoCS)
    DEV_SPI_WriteData_NoCS(Data);

    DEV_Delay_us(10);
    DEV_Digital_Write(EPD_CS_PIN, 1);
    DEV_Digital_Write(EPD_CS2_PIN, 1);
    DEV_Delay_us(10);
}

/******************************************************************************
function :	SPI read data
parameter:
     MS_opt : Master/Slave selection
******************************************************************************/
static UBYTE EPD_1IN69_E6_MsDev_ReadData(UBYTE MS_opt)
{
    UBYTE temp = 0x00;

    if (MS_opt == MASTER_ONLY) {
        DEV_Digital_Write(EPD_CS_PIN, 0);
        DEV_Digital_Write(EPD_CS2_PIN, 1);
    } else if (MS_opt == SLAVE_ONLY) {
        DEV_Digital_Write(EPD_CS_PIN, 1);
        DEV_Digital_Write(EPD_CS2_PIN, 0);
    } else { // MASTER_SLAVE
        DEV_Digital_Write(EPD_CS_PIN, 0);
        DEV_Digital_Write(EPD_CS2_PIN, 0);
    }

    DEV_Delay_us(10);
    temp = DEV_SPI_ReadData();
    DEV_Delay_us(10);
    DEV_Digital_Write(EPD_CS_PIN, 1);
    DEV_Digital_Write(EPD_CS2_PIN, 1);
    DEV_Delay_us(10);

    return temp;
}

/******************************************************************************
function :	Read temperature
parameter:
******************************************************************************/
static UBYTE EPD_1IN69_E6_ReadTemptr(void)
{
    UBYTE temptr_intgr = 0;
    UBYTE temptr_decml = 0;

    EPD_1IN69_E6_MsDev_WriteCom(MASTER_ONLY, 0x40);
    DEV_Delay_ms(100);
    EPD_1IN69_E6_ReadBusy();
    temptr_intgr = EPD_1IN69_E6_MsDev_ReadData(MASTER_ONLY);
    temptr_decml = EPD_1IN69_E6_MsDev_ReadData(MASTER_ONLY);

    Temptr_Cur = temptr_intgr;
    Debug("Panel temperature: %u C (fraction 0x%02X)\r\n", temptr_intgr, temptr_decml);

    return temptr_intgr;
}

/******************************************************************************
function :	Write temperature
parameter:
******************************************************************************/
static void EPD_1IN69_E6_WriteTemptr(UBYTE temptr_lock)
{
    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0xE0);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x03);

    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0xE5);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, temptr_lock);
    EPD_1IN69_E6_ReadBusy();
}

/******************************************************************************
function :	Read OTP power settings
parameter:
******************************************************************************/
static void EPD_1IN69_E6_Read_OTP_PWR(UBYTE temptr_opt)
{
    UDOUBLE i, j;
    UBYTE   OTP_VCOM;
    UBYTE   temptr_val = 0;

    DEV_Digital_Write(EPD_MS_PIN, 1);
    EPD_1IN69_E6_Reset();
    DEV_Digital_Write(EPD_MS_PIN, 0);

    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0x00);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x0F);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x69);

    EPD_1IN69_E6_ReadTemptr();

    if (temptr_opt > 0 && temptr_opt != TEMPTR_ON) {
        temptr_val = temptr_opt;
    } else {
        temptr_val = Temptr_Cur;
    }

    DEV_Digital_Write(EPD_MS_PIN, 1);
    DEV_Delay_ms(1);

    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0x00);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x0F);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x69);

    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0x01);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x00);

    EPD_1IN69_E6_WriteTemptr(temptr_val);

    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0x04);
    EPD_1IN69_E6_ReadBusy();
    DEV_Delay_ms(10);

    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0x02);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x00);
    EPD_1IN69_E6_ReadBusy();
    DEV_Delay_ms(10);

    DEV_Digital_Write(EPD_MS_PIN, 0);
    DEV_Delay_ms(1);

    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0xF0);
    EPD_1IN69_E6_MsDev_ReadData(MASTER_ONLY);

    for (j = 0; j < 207; j++)
        EPD_1IN69_E6_MsDev_ReadData(MASTER_ONLY);

    OTP_VCOM = EPD_1IN69_E6_MsDev_ReadData(MASTER_ONLY);

    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0xF5);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0xA5);

    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0x94);
    EPD_1IN69_E6_MsDev_ReadData(MASTER_ONLY);

    for (i = 0; i < 5; i++) {
        OTP_PWR[i] = EPD_1IN69_E6_MsDev_ReadData(MASTER_ONLY);
    }

    Debug("OTP VCOM=0x%02X PWR=%02X %02X %02X %02X %02X\r\n",
          OTP_VCOM, OTP_PWR[0], OTP_PWR[1], OTP_PWR[2], OTP_PWR[3], OTP_PWR[4]);

    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0xF5);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x00);

    DEV_Digital_Write(EPD_MS_PIN, 1);
    EPD_1IN69_E6_Reset();
    DEV_Digital_Write(EPD_MS_PIN, 0);

    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0x66);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x49);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x55);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x13);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x5D);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x05);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x10);

    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0x13);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x00);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x00);

    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0xE0);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x01);

    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0x00);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x13);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0xE9);

    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0x01);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x0F);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, OTP_PWR[0]);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, OTP_PWR[1]);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, OTP_PWR[2]);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, OTP_PWR[3]);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, OTP_PWR[4]);

    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0x06);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0xD7);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0xDE);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x12);

    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0x61);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x00);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0xC8);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x01);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x90);

    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0x82);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, OTP_VCOM);

    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0xE3);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x01);

    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0xE9);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x01);
}

/******************************************************************************
function :	Send stripe data (color bars)
parameter:
******************************************************************************/
static void EPD_1IN69_E6_Send_HV_Stripe_Data(void)
{
    UWORD col, row;

    Debug("Sending stripe data to MASTER\r\n");
    EPD_1IN69_E6_MsDev_WriteCom(MASTER_ONLY, 0x00);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_ONLY, 0x13);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_ONLY, 0xE9);

    EPD_1IN69_E6_MsDev_WriteCom(MASTER_ONLY, 0x10);
    DEV_Delay_ms(10);
    for (col = 0; col < 400; col++) {
        for (row = 0; row < 100; row++) {
            if (col >= 82 && col < 200 && row >= 10 && row <= 36) {
                EPD_1IN69_E6_MsDev_WriteData(MASTER_ONLY, EPD_COLOR_WHITE);
            } else if (col >= 82 && col < 200 && row > 36 && row <= 62) {
                EPD_1IN69_E6_MsDev_WriteData(MASTER_ONLY, EPD_COLOR_YELLOW);
            } else if (col >= 82 && col < 200 && row > 62 && row <= 89) {
                EPD_1IN69_E6_MsDev_WriteData(MASTER_ONLY, EPD_COLOR_GREEN);
            } else if (col >= 200 && col < 318 && row >= 10 && row <= 36) {
                EPD_1IN69_E6_MsDev_WriteData(MASTER_ONLY, EPD_COLOR_BLACK);
            } else if (col >= 200 && col < 318 && row > 36 && row <= 62) {
                EPD_1IN69_E6_MsDev_WriteData(MASTER_ONLY, EPD_COLOR_BLUE);
            } else if (col >= 200 && col < 318 && row > 62 && row <= 89) {
                EPD_1IN69_E6_MsDev_WriteData(MASTER_ONLY, EPD_COLOR_RED);
            } else {
                EPD_1IN69_E6_MsDev_WriteData(MASTER_ONLY, EPD_COLOR_WHITE);
            }
        }
    }

    Debug("Sending stripe data to SLAVE\r\n");
    EPD_1IN69_E6_MsDev_WriteCom(SLAVE_ONLY, 0x00);
    EPD_1IN69_E6_MsDev_WriteData(SLAVE_ONLY, 0x17);
    EPD_1IN69_E6_MsDev_WriteData(SLAVE_ONLY, 0xE9);

    EPD_1IN69_E6_MsDev_WriteCom(SLAVE_ONLY, 0x10);
    DEV_Delay_ms(10);
    for (col = 0; col < 400; col++) {
        for (row = 0; row < 100; row++) {
            if (col >= 82 && col < 200 && row >= 10 && row <= 36) {
                EPD_1IN69_E6_MsDev_WriteData(SLAVE_ONLY, EPD_COLOR_WHITE);
            } else if (col >= 82 && col < 200 && row > 36 && row <= 62) {
                EPD_1IN69_E6_MsDev_WriteData(SLAVE_ONLY, EPD_COLOR_YELLOW);
            } else if (col >= 82 && col < 200 && row > 62 && row <= 89) {
                EPD_1IN69_E6_MsDev_WriteData(SLAVE_ONLY, EPD_COLOR_GREEN);
            } else if (col >= 200 && col < 318 && row >= 10 && row <= 36) {
                EPD_1IN69_E6_MsDev_WriteData(SLAVE_ONLY, EPD_COLOR_BLACK);
            } else if (col >= 200 && col < 318 && row > 36 && row <= 62) {
                EPD_1IN69_E6_MsDev_WriteData(SLAVE_ONLY, EPD_COLOR_BLUE);
            } else if (col >= 200 && col < 318 && row > 62 && row <= 89) {
                EPD_1IN69_E6_MsDev_WriteData(SLAVE_ONLY, EPD_COLOR_RED);
            } else {
                EPD_1IN69_E6_MsDev_WriteData(SLAVE_ONLY, EPD_COLOR_WHITE);
            }
        }
    }
    Debug("Stripe data sent\r\n");
}

/******************************************************************************
function :	Send image data
parameter:
     pic : Image data pointer
******************************************************************************/
static void EPD_1IN69_E6_Send_HV_Stripe_imageData(const unsigned char *pic)
{
    UWORD col, row;
    UBYTE temp1, temp2, temp;

    // 输入为逐行 4-bit 像素；主 IC 接收每组四像素中的偶数 x 像素。
    Debug("Sending image data to MASTER (even x pixels)\r\n");
    EPD_1IN69_E6_MsDev_WriteCom(MASTER_ONLY, 0x00);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_ONLY, 0x13);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_ONLY, 0xE9);

    EPD_1IN69_E6_MsDev_WriteCom(MASTER_ONLY, 0x10);
    DEV_Delay_ms(10);
    for (col = 0; col < 400; col++) {
        for (row = 0; row < 100; row++) {
            // 每行 200 字节，每字节包含两个相邻的横向像素。
            UDOUBLE index = col * 200 + row * 2;
            // 取连续两个字节的高半字节，即 x=4n 和 x=4n+2。
            temp1 = (pic[index] & 0xF0);
            temp2 = (pic[index + 1] >> 4);
            temp  = temp1 | temp2;
            EPD_1IN69_E6_MsDev_WriteData(MASTER_ONLY, temp);
        }
    }

    // 从 IC 接收每组四像素中的奇数 x 像素。
    Debug("Sending image data to SLAVE (odd x pixels)\r\n");
    EPD_1IN69_E6_MsDev_WriteCom(SLAVE_ONLY, 0x00);
    EPD_1IN69_E6_MsDev_WriteData(SLAVE_ONLY, 0x17);
    EPD_1IN69_E6_MsDev_WriteData(SLAVE_ONLY, 0xE9);

    EPD_1IN69_E6_MsDev_WriteCom(SLAVE_ONLY, 0x10);
    DEV_Delay_ms(10);
    for (col = 0; col < 400; col++) {
        for (row = 0; row < 100; row++) {
            // 取连续两个字节的低半字节，即 x=4n+1 和 x=4n+3。
            UDOUBLE index = col * 200 + row * 2;
            temp1 = ((pic[index] & 0x0F) << 4);
            temp2 = (pic[index + 1] & 0x0F);
            temp  = temp1 | temp2;
            EPD_1IN69_E6_MsDev_WriteData(SLAVE_ONLY, temp);
        }
    }
    Debug("Image data sent\r\n");
}

/******************************************************************************
function :	Send clear data (white screen)
parameter:
******************************************************************************/
static void EPD_1IN69_E6_Send_HV_Stripe_cleanData(void)
{
    UWORD col, row;

    Debug("Sending full white data to MASTER\r\n");
    EPD_1IN69_E6_MsDev_WriteCom(MASTER_ONLY, 0x00);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_ONLY, 0x13);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_ONLY, 0xE9);

    EPD_1IN69_E6_MsDev_WriteCom(MASTER_ONLY, 0x10);
    DEV_Delay_ms(10);
    for (col = 0; col < 400; col++) {
        for (row = 0; row < 100; row++) {
            EPD_1IN69_E6_MsDev_WriteData(MASTER_ONLY, EPD_COLOR_WHITE);
        }
    }

    Debug("Sending full white data to SLAVE\r\n");
    EPD_1IN69_E6_MsDev_WriteCom(SLAVE_ONLY, 0x00);
    EPD_1IN69_E6_MsDev_WriteData(SLAVE_ONLY, 0x17);
    EPD_1IN69_E6_MsDev_WriteData(SLAVE_ONLY, 0xE9);

    EPD_1IN69_E6_MsDev_WriteCom(SLAVE_ONLY, 0x10);
    DEV_Delay_ms(10);
    for (col = 0; col < 400; col++) {
        for (row = 0; row < 100; row++) {
            EPD_1IN69_E6_MsDev_WriteData(SLAVE_ONLY, EPD_COLOR_WHITE);
        }
    }
    Debug("Full white data sent\r\n");
}

/******************************************************************************
function :	Initialize the e-Paper register
parameter:
******************************************************************************/
void EPD_1IN69_E6_Init(void)
{
    EPD_1IN69_E6_Reset();
    EPD_1IN69_E6_ReadBusy();
    EPD_1IN69_E6_Read_OTP_PWR(TEMPTR_ON);
    Debug("EPD_1IN69_E6 Init\r\n");
}

/******************************************************************************
function :	Clear screen
parameter:
******************************************************************************/
void EPD_1IN69_E6_Clear(void)
{
    EPD_1IN69_E6_Reset();
    EPD_1IN69_E6_ReadBusy();
    EPD_1IN69_E6_Read_OTP_PWR(TEMPTR_ON);
    EPD_1IN69_E6_Send_HV_Stripe_cleanData();

    Debug("Sending power on command\r\n");
    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0x04);
    Debug("升压\r\n");
    EPD_1IN69_E6_ReadBusy();

    Debug("Sending refresh command\r\n");
    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0x12);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x00);
    DEV_Delay_ms(10);
    EPD_1IN69_E6_ReadBusy();

    Debug("Sending power off command\r\n");
    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0x02);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x00);
    EPD_1IN69_E6_ReadBusy();
    DEV_Delay_ms(20);
    Debug("EPD display completed\r\n");
}

/******************************************************************************
function :	Sends the image buffer in RAM to e-Paper and displays
parameter:
******************************************************************************/
void EPD_1IN69_E6_Display(const unsigned char *Image)
{
    EPD_1IN69_E6_Reset();
    EPD_1IN69_E6_ReadBusy();
    EPD_1IN69_E6_Read_OTP_PWR(TEMPTR_ON);
    EPD_1IN69_E6_Send_HV_Stripe_imageData(Image);

    Debug("Sending power on command\r\n");
    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0x04);
    Debug("升压\r\n");
    EPD_1IN69_E6_ReadBusy();

    Debug("Sending refresh command\r\n");
    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0x12);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x00);
    DEV_Delay_ms(10);
    EPD_1IN69_E6_ReadBusy();

    Debug("Sending power off command\r\n");
    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0x02);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x00);
    EPD_1IN69_E6_ReadBusy();
    DEV_Delay_ms(20);
    Debug("EPD display completed\r\n");
}

/******************************************************************************
function :	Display stripe (color bars)
parameter:
******************************************************************************/
void EPD_1IN69_E6_DisplayStripe(void)
{
    EPD_1IN69_E6_Reset();
    EPD_1IN69_E6_ReadBusy();
    EPD_1IN69_E6_Read_OTP_PWR(TEMPTR_ON);
    EPD_1IN69_E6_Send_HV_Stripe_Data();

    Debug("Sending power on command\r\n");
    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0x04);
    Debug("升压\r\n");
    EPD_1IN69_E6_ReadBusy();

    Debug("Sending refresh command\r\n");
    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0x12);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x00);
    DEV_Delay_ms(10);
    EPD_1IN69_E6_ReadBusy();

    Debug("Sending power off command\r\n");
    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0x02);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0x00);
    EPD_1IN69_E6_ReadBusy();
    DEV_Delay_ms(20);
    Debug("EPD display completed\r\n");
}

/******************************************************************************
function :	Enter sleep mode
parameter:
******************************************************************************/
void EPD_1IN69_E6_Sleep(void)
{
    EPD_1IN69_E6_MsDev_WriteCom(MASTER_SLAVE, 0x07);
    EPD_1IN69_E6_MsDev_WriteData(MASTER_SLAVE, 0xA5);
    Debug("Entered deep sleep\r\n");
}
