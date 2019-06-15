echo Введите путь
read dir
for f in "$dir"/*.txt
do
echo "$f"
cat "$f"
done
read 
