echo off
echo Копирование и удаление файла
md D:\DIR1
md D:\DIR1\DIR2
copy D:\sbs-401\text1.txt D:\DIR1\DIR2\textnew.txt
del D:\sbs-401\text1.txt
echo Файл скопирован и удален
PAUSE