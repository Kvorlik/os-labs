while(true){
var menu;

WScript.Echo("����:");
WScript.Echo("1  - �������  �����  �  ����������  ����  ���������  ���������� ���������");
WScript.Echo("2  - ������� ��� ����������� �����");
menu = WScript.StdIn.ReadLine();

if(menu == "1"){
var WshShell2; 
var WshEnvirSys, WshEnvirUsr1, WshEnvirVol, WshEnvirProc; 
var s="", u="", v="", p="";
// ��������� ������ �� ������ 
WshShell2 = WScript.CreateObject("WScript.Shell") 
// ��� SYSTEM 
WshEnvirSys = new Enumerator(WshShell2.Environment("SYSTEM"));
// ��� USER 
WshEnvirUsr1 = new Enumerator(WshShell2.Environment("USER")); 
// ��� VOLATILE 
WshEnvirVol = new Enumerator(WshShell2.Environment("VOLATILE"));
// ��� PROCESS 
WshEnvirProc = new Enumerator(WshShell2.Environment("PROCESS")); 
for (; !WshEnvirSys.atEnd(); WshEnvirSys.moveNext())
s+=WshEnvirSys.item()+"\n"; 
for (; !WshEnvirUsr1.atEnd(); WshEnvirUsr1.moveNext()) 
u+=WshEnvirUsr1.item()+"\n"; 
for (; !WshEnvirVol.atEnd(); WshEnvirVol.moveNext()) 
v+=WshEnvirVol.item()+"\n"; 
for (; !WshEnvirProc.atEnd(); WshEnvirProc.moveNext())
p+=WshEnvirProc.item()+"\n";
WScript.Echo ( "���������:\n\n" + s); 
WScript.Echo ( "����������������:\n\n" + u); 
WScript.Echo ( "���������:\n\n" + v);
WScript.Echo ( "������� �������:\n\n" + p);

}
else if(menu == "2"){
var WS = WScript.CreateObject("WScript.Shell");
PrintFolders = WS.SpecialFolders;
	WScript.Echo("����������� �����:");
	for(var i = 0; i < PrintFolders.Count(); i++)
	{
		WScript.Echo(PrintFolders(i));
	}
}
}
