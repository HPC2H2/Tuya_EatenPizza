/*****************************************************************************
* | File      	:		EPD_1in69_E6_test.c
* | Author      :   Waveshare team
* | Function    :   1.69inch e-paper E6 test demo
* | Info        :
*----------------
* |	This version:   V1.0
* | Date        :   2026-01
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
#include "EPD_Test.h"
#include "EPD_1in69_E6.h"

int EPD_test(void)
{
    printf("EPD_1in69_E6_test Demo\r\n");
    if (DEV_Module_Init() != 0) {
        return -1;
    }

    printf("e-Paper Init and Clear...\r\n");
    EPD_1IN69_E6_Init();
    EPD_1IN69_E6_Clear();

    DEV_Delay_ms(1000);

#if 1 // show stripe (color bars)
    printf("Display stripe (color bars)...\r\n");
    EPD_1IN69_E6_DisplayStripe();
    DEV_Delay_ms(3000);
#endif

#if 1 // show image for array
    printf("show image for array\r\n");
    EPD_1IN69_E6_Display(gImage1);
    DEV_Delay_ms(3000);

    EPD_1IN69_E6_Display(gImage2);
    DEV_Delay_ms(3000);
#endif

    printf("Clear...\r\n");
    EPD_1IN69_E6_Clear();

    printf("Goto Sleep...\r\n");
    EPD_1IN69_E6_Sleep();
    DEV_Delay_ms(2000); // important, at least 2s
    // close 5V
    printf("close 5V, Module enters 0 power consumption ...\r\n");
    DEV_Module_Exit();

    return 0;
}
