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
ls -l $f >> report1.txt
done
chmod 777 report1.txt
ln report1.txt Link_report1.txt
ln -s report1.txt "/home/student/Рабочий стол/Link_report1.txt"
