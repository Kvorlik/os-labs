catalog=$1
echo Mode:
echo "1) Replace"
echo "2) Add"
echo "3) Delete"
echo "4) Sync"
echo "Choose mode:"
read mode

if [ $mode -eq 1 ]
then
  if [ -z $catalog ]
  then
    cp -r ./MyCatalog ./backup
  else
    cp -r ./MyCatalog ./$catalog
  fi
  exit
fi

if [ $mode -eq 2 ]
then
  if [ -z $catalog ]
  then
    cp -rn ./MyCatalog/*.* ./backup
  else
    cp -rn ./MyCatalog/*.* ./$catalog
  fi
  exit
fi

if [ $mode -eq 3 ]
then
  if [ -z $catalog ]
  then
    for f in ./backup/*.*
    do
      if [ -e ./MyCatalog/$f ]
      then
        0 -eq 0
      else
        rm $f
      fi
    done
  else
    for f in ./$catalog/*.*
    do
      if [ -e ./MyCatalog/$f ]
      then
        0 -eq 0
      else
        rm $f
      fi
    done
  fi
  exit
fi

if [ $mode -eq 4 ]
then
  if [ -z $catalog ]
  then
    for f in ./MyCatalog/*.*
    do
      cp -ru $f ./backup
    done
  else
    for f in ./MyCatalog/*.*
    do
      cp -ru $f ./$catalog
    done
  fi
fi
