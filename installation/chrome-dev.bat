@echo off

start chrome

:checkExec

tasklist /FI "IMAGENAME eq chrome.exe" 2>NUL | find /I /N "chrome.exe">NUL

IF "%ERRORLEVEL%"=="0" (
  echo "Chrome läuft..."
) ELSE (
  echo "Chrome läuft noch nicht..."
  GOTO checkExec
)

timeout /T 3 /nobreak

start chrome "%~dp0..\tmp\syntax-highlighting.js"
