@echo off
setlocal
set "APP_DIR=%~dp0"
set "TUYA_PY=%~d0\TuyaOpen\.venv\Scripts\pythonw.exe"

if exist "%TUYA_PY%" (
    start "" "%TUYA_PY%" "%APP_DIR%pizza_simulator.py"
    exit /b 0
)

py -3 -c "import tkinter; import PIL" >nul 2>&1
if errorlevel 1 (
    echo Cannot find a Python environment with Tkinter and Pillow.
    echo Install dependencies with: py -3 -m pip install -r "%APP_DIR%requirements.txt"
    pause
    exit /b 1
)

start "" pyw -3 "%APP_DIR%pizza_simulator.py"
