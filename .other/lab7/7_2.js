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
	WScript.Echo("�������� ��������� ������ �� �����. ������� '?' ����� ������� �������");
}
else if (objArgs(0) == "?")
{
	WScript.Echo("������� '1' ����� ������� ����� � ���������� ���� ��������� ���������� ���������");
	WScript.Echo("������� '2' ����� ������� ��� ����������� �����");
}
else if (objArgs(0) == "1")
{
	for(i = 1; !num.atEnd(); num.moveNext(), i++)
		WScript.Echo(num.item());
}
else if (objArgs(0) == "2")
{
	WScript.Echo("����������� ����� Windows: ");
	for (i = 0; i < WshSpecFold.Count(); i++)
		WScript.Echo(WshSpecFold(i));
}
else
{
	WScript.StdErr.Write("������ �������� �������� ��������� ������! ������� '?' ����� ������� �������");
}