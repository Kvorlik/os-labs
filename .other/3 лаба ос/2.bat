@echo off
SET /p catalog= "name: "
cd %catalog%
for /r %catalog% %%i in (*.txt) do (
rem
echo %%i)
pause