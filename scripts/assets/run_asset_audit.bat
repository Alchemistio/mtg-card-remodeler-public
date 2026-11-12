@echo off
setlocal
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel%==0 (
  py -3 run_asset_audit.py
) else (
  where python >nul 2>nul
  if errorlevel 1 (
    echo Python 3.10+ est requis. Installez Python puis relancez ce fichier.
    pause
    exit /b 2
  )
  python run_asset_audit.py
)
echo.
pause
