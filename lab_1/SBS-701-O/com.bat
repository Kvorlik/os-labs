@echo off
echo "Copy and delete file."
mkdir D:\SBS-701-O\DIR1
mkdir D:\SBS-701-O\DIR1\DIR2
copy D:\SBS-701-O\text1.txt D:\SBS-701-O\DIr1\DIR2\textnew.txt
del D:\SBS-701-O\text1.txt
echo "File deleted."
pause
