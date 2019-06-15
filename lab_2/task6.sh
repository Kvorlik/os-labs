filename=$1
if [ -e $filename ]
then
  echo "File exists"
else
  echo "File isn't exists"
  read
  exit
fi
if [ -r $filename ]
then
  echo "File is readable"
fi
if [ -w $filename ]
then
  echo "File is writable"
fi
if [ -x $filename ]
then
  echo "File is executable"
fi
