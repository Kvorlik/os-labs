@echo off
chcp 1251
echo 1 - ����� ����� ����������
echo 2 - ����� ������ ������������ TCP/IP ��� ���� ���������
echo 3 - ���������� ���������� ���� ������������� ���� DNS �������
echo 4 - �������� ��� DNS
echo ����� ������ ������� - �����
set /p i="������� ����� "
if %i% == 1 goto L1
if %i% == 2 goto L2
if %i% == 3 goto L3
if %i% == 4 goto L4
goto exit
:L1
hostname
goto exit
:L2
ipconfig /all
goto exit
:L3
ipconfig /displaydns
goto exit
:L4
ipconfig /flushdns
goto exit
:exit
pause