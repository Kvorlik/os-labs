@echo off
set catalog=%1
echo Mode:
echo 1) Replace files
echo 2) Add files
echo 3) Delete files
set /p mode="Choose mode: "
if %mode%==1 goto 1
if %mode%==2 goto 2
if %mode%==3 goto 3

:1
if "%catalog%"=="" (
xcopy MyCatalog .\backup\"" /e /r /y
) else (
xcopy MyCatalog %catalog%\"" /e /r /y
)
goto ext

:2
if "%catalog%"=="" (
xcopy MyCatalog .\backup\*.* /y
) else (
xcopy MyCatalog %catalog%\*.* /y
)
goto ext

:3
if "%catalog%"=="" (
robocopy MyCatalog .\backup /purge /nfl /ndl /njh /njs /nc /ns /np
) else (
robocopy MyCatalog %catalog% /purge /nfl /ndl /njh /njs /nc /ns /np
)

:ext
