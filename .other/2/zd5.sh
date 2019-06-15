echo Введите первое число
read a
echo Введите второе число
read b
if test $a -lt $b
then echo Первое число меньше
elif test $a -gt $b
then echo Второе число меньше
else echo числа равны
fi
read
