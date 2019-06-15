//*********************************************************************************
//Name: 7_1.js
//Language: JScript
//Description: Lab 7, Task 1
//*********************************************************************************

var objArgs;
objArgs = WScript.Arguments;
if (objArgs.Count() == 0)
{
	WScript.Echo("Аргумент командной строки не задан. Введите '?' чтобы вывести справку");
}
else if (objArgs(0) == "?")
{
	WScript.Echo("Введите '1' чтобы сравнить два числа, введенные с клавиатуры");
	WScript.Echo("Введите '2' чтобы вывести на экран путь к исполняемому файлу сервера сценариев, имя запущенного сценария и версию WSH");
}
else if (objArgs(0) == "1")
{
	var a, b;
	WScript.Echo("Введите первое число: ");
	a = parseFloat(WScript.StdIn.ReadLine());
	WScript.Echo("Введите второе число: ");
	b = parseFloat(WScript.StdIn.ReadLine());
	if (a > b) WScript.Echo(a, ">", b);
	else if (a < b) WScript.Echo(a, "<", b);
	else WScript.Echo(a, "=", b);
}
else if (objArgs(0) == "2")
{
	WScript.Echo("Путь к исполняемому файлу сервера сценариев: ");
	WScript.Echo(WScript.ScriptFullName);
	WScript.Echo("Имя запущенного сценария: ");
	WScript.Echo(WScript.ScriptName);
	WScript.Echo("Версия WSH: ");
	WScript.Echo(WScript.Version);
}
else
{
	WScript.Echo("Аргумент командной строки задан не верно! Введите '?' чтобы вывести справку");
}