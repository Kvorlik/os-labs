txt_dir=$1
for f in $txt_dir/*.txt
do
echo $f
cat $f
echo
done
