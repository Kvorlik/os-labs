@echo off
echo %1
if exist %1 (
	attrib +S %1 
) else (
echo not exist
)
pause
PASUSE