@echo off
set /p name= "file: "
if exist C:\tasm\%name% attrib +S C:\tasm\%name%
if not exist C:\tasm\%name% echo file not found
pause