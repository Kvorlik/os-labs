while(true){
var s;

WScript.Echo("Меню:");
WScript.Echo("1  - Сравнение двух чисел, введенных с клавиатуры пользователя");
WScript.Echo("2  - Выводит на экран путь к исполняемому файлу сервера сценариев, имя запущенного сценария, версию WSH");
s = WScript.StdIn.ReadLine();

if(s == "2"){
WScript.Echo(WScript.FullName + "\n");
WScript.Echo(WScript.ScriptName + "\n");
WScript.Echo(WScript.Version + "\n");
}

else if (s == "1"){
var a, b;

WScript.Echo("Введите первое число:"); 
a = WScript.StdIn.ReadLine();
WScript.Echo("Введите второе число:");
b = WScript.StdIn.ReadLine();

if(parseInt(a)>parseInt(b)){
WScript.Echo("Первое число больше"); 
}
else if(parseInt(a)<parseInt(b)){
WScript.Echo("Второе число больше"); 
}
else{
WScript.Echo("Числа равны"); 
}

}
}