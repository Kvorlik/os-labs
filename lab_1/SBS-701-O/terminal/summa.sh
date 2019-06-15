echo "Concat and rename file.";
cat A.txt B.txt > C.txt;
cat C.txt;
read;
mv A.txt FINA.txt;
mv B.txt FINB.txt;
echo "Task complete."
