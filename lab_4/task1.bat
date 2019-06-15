@echo off
chcp 1251
echo 1 - вывод имени компьютера
echo 2 - вывод полной конфигурации TCP/IP для всех адаптеров
echo 3 - отобразить содержимое кэша сопоставления имен DNS клиента
echo 4 - очистить кэш DNS
echo любая другая клавиша - выход
set /p i="введите цифру "
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