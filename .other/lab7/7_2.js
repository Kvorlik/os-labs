//*********************************************************************************
//Name: 7_2.js
//Language: JScript
//Description: Lab 7, Task 2
//*********************************************************************************

var WshShell, WshSysEnv, num, WshSpecFold, objArgs, i;
WshShell = WScript.CreateObject("WScript.Shell");
WshSysEnv = WshShell.Environment;
num = new Enumerator(WshSysEnv);
WshSpecFold = WshShell.SpecialFolders;
objArgs = WScript.Arguments;

if (objArgs.Count() == 0)
{
	WScript.Echo("јргумент командной строки не задан. ¬ведите '?' чтобы вывести справку");
}
else if (objArgs(0) == "?")
{
	WScript.Echo("¬ведите '1' чтобы вывести имена и содержимое всех системных переменных окружени€");
	WScript.Echo("¬ведите '2' чтобы вывести все специальные папки");
}
else if (objArgs(0) == "1")
{
	for(i = 1; !num.atEnd(); num.moveNext(), i++)
		WScript.Echo(num.item());
}
else if (objArgs(0) == "2")
{
	WScript.Echo("—пециальные папки Windows: ");
	for (i = 0; i < WshSpecFold.Count(); i++)
		WScript.Echo(WshSpecFold(i));
}
else
{
	WScript.StdErr.Write("¬веден неверный аргумент командной строки! ¬ведите '?' чтобы вывести справку");
}