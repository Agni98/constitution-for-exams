@echo off
setlocal
title The Constitution of India

REM Double-click this to read the Constitution.
REM If a server is already running it just opens the browser.
REM Otherwise it starts one. Keep this window open while you read.

cd /d "%~dp0site"

REM Already serving? Then don't start a second one.
curl -s -o nul -m 3 http://localhost:8770/ >nul 2>&1
if not errorlevel 1 (
  echo.
  echo   Already running. Opening your browser...
  start "" "http://localhost:8770"
  timeout /t 2 >nul
  exit /b 0
)

REM Find a working Python. "python" on Windows can be a Store stub that does
REM nothing, so prefer the py launcher when it exists.
set "PY="
where py >nul 2>&1 && set "PY=py"
if not defined PY ( where python >nul 2>&1 && set "PY=python" )

if not defined PY (
  echo.
  echo   Python was not found on this computer.
  echo.
  echo   You can still read the site without it:
  echo   open  site\index.html  by double-clicking it.
  echo.
  pause
  exit /b 1
)

echo.
echo   The Constitution of India
echo   -------------------------------------------
echo   Opening  http://localhost:8770
echo.
echo   Keep this window open while you read.
echo   Close it, or press Ctrl+C, to stop.
echo.

REM Give the server a moment to bind before the browser asks for the page.
start "" /b cmd /c "timeout /t 2 >nul & start "" http://localhost:8770"

%PY% serve.py 8770

echo.
echo   Server stopped.
echo.
pause
