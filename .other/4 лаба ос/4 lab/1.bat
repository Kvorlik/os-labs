@echo off
chcp 1251
:m
cls
echo 1) Вывести имя компьютера.
echo 2) Вывести полную конфигурацию TCP/IP для всех адаптеров.
echo 3) Отобразить содержимое кэша сопоставления имен DNS клиента.
echo 4) Очистить кэш DNS.

SET /p a=
IF "%a%" == "1" GOTO 1
IF "%a%" == "2" GOTO 2
IF "%a%" == "3" GOTO 3
IF "%a%" == "4" GOTO 4
ELSE 
(
goto m
)

:1
hostname
pause
goto m

:2
ipconfig /all
pause
goto m

:3
ipconfig/displaydns
pause
goto m

:4
ipconfig/flushdns
pause
goto m
