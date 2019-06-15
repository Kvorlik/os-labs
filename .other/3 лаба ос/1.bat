@echo off
chcp 1251
set /p a="Input a " 
set /p b="Input b " 
if %a% GTR %b% echo Первое число больше
if %a% LSS %b% echo Второе число больше
if %a% EQU %b% echo Числа равны
PAUSE