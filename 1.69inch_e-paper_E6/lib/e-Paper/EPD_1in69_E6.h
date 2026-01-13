/*****************************************************************************
* | File      	:   EPD_1in69_E6.h
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
#ifndef __EPD_1IN69_E6_H_
#define __EPD_1IN69_E6_H_

#include "DEV_Config.h"

// Display resolution
#define EPD_1IN69_E6_WIDTH  400
#define EPD_1IN69_E6_HEIGHT 200

// Mode definitions
#define MASTER_ONLY  0
#define SLAVE_ONLY   1
#define MASTER_SLAVE 2

// Color definitions
#define WHITE  0x11
#define BLACK  0x00
#define RED    0x33
#define YELLOW 0x22
#define BLUE   0x55
#define GREEN  0x66

// Display mode
#define PIC_HALF 0xFC // 半张图片
#define PIC_A    0xFD // 整张图片
#define STRIPE   0xFE
#define IMAGE    0xFF

// Temperature control
#define TEMPTR_ON  0xFF
#define TEMPTR_OFF 0

void EPD_1IN69_E6_Init(void);
void EPD_1IN69_E6_Clear(void);
void EPD_1IN69_E6_Display(const unsigned char *Image);
void EPD_1IN69_E6_DisplayStripe(void);
void EPD_1IN69_E6_Sleep(void);

#endif
