@echo off
chcp 1251
set /p a="Input a " 
set /p b="Input b " 
if %a% GTR %b% echo ������ ����� ������
if %a% LSS %b% echo ������ ����� ������
if %a% EQU %b% echo ����� �����
PAUSE