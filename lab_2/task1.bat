@echo off
set /a a = %1
set /a b = %2
if %a% GTR %b% goto case1
if %a% LSS %b% goto case2
if %a% EQU %b% goto case3
:case1
echo "A > B"
goto exit
:case2
echo "A < B"
goto exit
:case3
echo "A = B"
:exit
