var condition, action;
var WshShell = WScript.CreateObject("WScript.Shell");
condition = WshShell.Popup("��������� �����������?", 0, "�����������", 4);
if (condition == 6) {
	WshShell.LogEvent(0,"������������ �������� �����������");
	action = WshShell.Exec("calc");
	WScript.Sleep(1000);
	WshShell.AppActivate(action.ProcessID);
	WshShell.SendKeys("3{+}2~");
	WshShell.SendKeys("^C");
	WScript.Sleep(1000);
	WshShell.AppActivate(action.ProcessID);
	WshShell.SendKeys("%{F4}");
	condition = WshShell.Popup("������� �������?", 0, "�������", 4);
	if (condition == 6) {
		WshShell.LogEvent(0,"������������ ������ �������");
		action = WshShell.Exec("notepad");
		WScript.Sleep(1000);
		WshShell.AppActivate(action.ProcessID);
		WshShell.SendKeys("��������� ����������:~");
		WshShell.SendKeys("3{+}2=^V~");
		WshShell.SendKeys("�����~");
		condition = WshShell.Popup("��������� ��������� ����������?", 0 , "���������", 4);
		if (condition == 6) {
			WshShell.LogEvent(0,"������������ �������� ��������� ����������");
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
	else WshShell.LogEvent(0,"������������ �� ������ �������");
}
else WshShell.LogEvent(0,"������������ �� �������� �����������");
