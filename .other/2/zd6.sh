cd "$( dirname "$0" )"
if [ -e $1 ]; then
  if [ -r $1 ]; then echo Файл читаем
  else echo Файл нечитаем
  fi
  if [ -w $1 ]; then echo файл записываем
  else echo Файл незаписываем
  fi
  if [ -x $1 ]; then echo файл исполняем
  else echo файл неисполняем
  fi
else echo файл не найден
fi
read
