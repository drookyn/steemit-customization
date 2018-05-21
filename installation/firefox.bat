@echo off

start firefox

:checkExec

tasklist /FI "IMAGENAME eq firefox.exe" 2>NUL | find /I /N "firefox.exe">NUL

IF "%ERRORLEVEL%"=="0" (
  echo "Firefox läuft..."
) ELSE (
  echo "Firefox läuft noch nicht..."
  GOTO checkExec
)

timeout /T 3 /nobreak

start firefox https://raw.githubusercontent.com/drookyn/steemit-customization/master/dist/syntax-highlighting.js
exit;
