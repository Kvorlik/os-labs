//*********************************************************************************
//Name: 8_1.js
//Language: JScript
//Description: Lab 8, Task 1
//*********************************************************************************

var WshShell, condition, action;
WshShell = WScript.CreateObject("WScript.Shell");
condition = WshShell.Popup("��������� �����������?", 0, "�����������", 4);
if (condition == 6)
{
	WshShell.LogEvent(1,"������������ �������� �����������");
	action = WshShell.Exec("calc");
	WScript.Sleep(1000);
	WshShell.AppActivate(action.ProcessID);
	WshShell.SendKeys("3,14-2,71{*}57,29{+}2018/10~");
	WshShell.SendKeys("^C");
	WScript.Sleep(1000);
	WshShell.AppActivate(action.ProcessID);
	WshShell.SendKeys("%{F4}");
	condition = WshShell.Popup("������� �������?", 0, "�������", 4);
	if (condition == 6)
	{
		WshShell.LogEvent(1,"������������ ������ �������");
		action = WshShell.Exec("notepad");
		WScript.Sleep(1000);
		WshShell.AppActivate(action.ProcessID);
		WshShell.SendKeys("��������� ����������:~");
		WshShell.SendKeys("3,14-2,71{*}57,29{+}2018/10=^V~");
		WshShell.SendKeys("�����~");
		condition = WshShell.Popup("��������� ��������� ����������?", 0 , "���������", 4);
		if (condition == 6)
		{
			WshShell.LogEvent(1,"������������ �������� ��������� ����������");
			WshShell.SendKeys("^S");
			WshShell.SendKeys("���������~");
			WshShell.AppActivate(action.ProcessID);
			WshShell.SendKeys("%{F4}");
		}
		else {
			WshShell.LogEvent(0,"������������ �� �������� ��������� ����������");
			WshShell.AppActivate(action.ProcessID);
			WshShell.SendKeys("%{F4}{right}~");
		}
	}
	else {
		WshShell.LogEvent(0,"������������ �� ������ �������");
	}
}
else {
	WshShell.LogEvent(0,"������������ �� �������� �����������");
}