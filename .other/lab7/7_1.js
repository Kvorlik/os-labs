//*********************************************************************************
//Name: 7_1.js
//Language: JScript
//Description: Lab 7, Task 1
//*********************************************************************************

var objArgs;
objArgs = WScript.Arguments;
if (objArgs.Count() == 0)
{
	WScript.Echo("�������� ��������� ������ �� �����. ������� '?' ����� ������� �������");
}
else if (objArgs(0) == "?")
{
	WScript.Echo("������� '1' ����� �������� ��� �����, ��������� � ����������");
	WScript.Echo("������� '2' ����� ������� �� ����� ���� � ������������ ����� ������� ���������, ��� ����������� �������� � ������ WSH");
}
else if (objArgs(0) == "1")
{
	var a, b;
	WScript.Echo("������� ������ �����: ");
	a = parseFloat(WScript.StdIn.ReadLine());
	WScript.Echo("������� ������ �����: ");
	b = parseFloat(WScript.StdIn.ReadLine());
	if (a > b) WScript.Echo(a, ">", b);
	else if (a < b) WScript.Echo(a, "<", b);
	else WScript.Echo(a, "=", b);
}
else if (objArgs(0) == "2")
{
	WScript.Echo("���� � ������������ ����� ������� ���������: ");
	WScript.Echo(WScript.ScriptFullName);
	WScript.Echo("��� ����������� ��������: ");
	WScript.Echo(WScript.ScriptName);
	WScript.Echo("������ WSH: ");
	WScript.Echo(WScript.Version);
}
else
{
	WScript.Echo("�������� ��������� ������ ����� �� �����! ������� '?' ����� ������� �������");
}