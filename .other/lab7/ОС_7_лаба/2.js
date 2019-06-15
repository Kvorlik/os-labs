while(true){
var menu;

WScript.Echo("Меню:");
WScript.Echo("1  - Выводит  имена  и  содержимое  всех  системных  переменных окружения");
WScript.Echo("2  - Выводит все специальные папки");
menu = WScript.StdIn.ReadLine();

if(menu == "1"){
var WshShell2; 
var WshEnvirSys, WshEnvirUsr1, WshEnvirVol, WshEnvirProc; 
var s="", u="", v="", p="";
// формируем ссылку на объект 
WshShell2 = WScript.CreateObject("WScript.Shell") 
// тип SYSTEM 
WshEnvirSys = new Enumerator(WshShell2.Environment("SYSTEM"));
// тип USER 
WshEnvirUsr1 = new Enumerator(WshShell2.Environment("USER")); 
// тип VOLATILE 
WshEnvirVol = new Enumerator(WshShell2.Environment("VOLATILE"));
// тип PROCESS 
WshEnvirProc = new Enumerator(WshShell2.Environment("PROCESS")); 
for (; !WshEnvirSys.atEnd(); WshEnvirSys.moveNext())
s+=WshEnvirSys.item()+"\n"; 
for (; !WshEnvirUsr1.atEnd(); WshEnvirUsr1.moveNext()) 
u+=WshEnvirUsr1.item()+"\n"; 
for (; !WshEnvirVol.atEnd(); WshEnvirVol.moveNext()) 
v+=WshEnvirVol.item()+"\n"; 
for (; !WshEnvirProc.atEnd(); WshEnvirProc.moveNext())
p+=WshEnvirProc.item()+"\n";
WScript.Echo ( "Системные:\n\n" + s); 
WScript.Echo ( "Пользовательские:\n\n" + u); 
WScript.Echo ( "Временные:\n\n" + v);
WScript.Echo ( "Текущий процесс:\n\n" + p);

}
else if(menu == "2"){
var WS = WScript.CreateObject("WScript.Shell");
PrintFolders = WS.SpecialFolders;
	WScript.Echo("Специальные папки:");
	for(var i = 0; i < PrintFolders.Count(); i++)
	{
		WScript.Echo(PrintFolders(i));
	}
}
}
