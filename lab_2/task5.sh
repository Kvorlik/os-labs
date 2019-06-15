echo Enter a
read a
echo Enter b
read b
if [ $a -gt $b ]
then
  echo "A > B"
fi
if [ $a -lt $b ]
then
  echo "A < B"
fi
if [ $a -eq $b ]
then
  echo "A = B"
fi
read
