b=false
while [ "$b" == "false" ]
do
echo "Введите каталог "
read a
if [ -d $a ]
then
b=true
else
echo "Введенного каталога не существует "
fi
done
for f in $a/*.txt
do
ls -l $f >> report_1.txt
done
chmod 777 report_1.txt
ln report_1.txt report_1_link.txt
ln -s "/home/kvorlik/Desktop/lab_3/report_1.txt" "/home/kvorlik/Desktop/report_1_link.txt"
