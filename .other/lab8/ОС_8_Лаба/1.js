//�������� � ���� ����������

var WshShell = WScript.CreateObject("WScript.Shell");
var Lnk = WshShell.Popup("������� �����������?",0,"�����������",1);
if(Lnk==1){
Calculator = WshShell.Exec("calc");

WScript.Sleep(1000);
WshShell.AppActivate(Calculator.ProcessID);
WshShell.SendKeys("2{+}3");
WScript.Sleep(400);
WshShell.SendKeys("=");
WScript.Sleep(400);
WshShell.SendKeys("^c");
WshShell.SendKeys("%{F4}");
WScript.Echo ("����������� ������");

var Lnk1 = WshShell.Popup("������� �������?",0,"�������",1);
if(Lnk1==1){
Not = WshShell.Exec("notepad");
WScript.Sleep(1000);
WshShell.AppActivate(Not.ProcessID);
WshShell.SendKeys("+%");
WScript.Sleep(1000);
WshShell.SendKeys("Htpekmnfns dsxbcktybq");
WshShell.SendKeys("+%");
WshShell.SendKeys("~");
WScript.Sleep(1000);
WshShell.SendKeys("2{+}3=");
WshShell.SendKeys("^v~");
WshShell.SendKeys("+%");
WScript.Sleep(1000);
WshShell.SendKeys("Rjytw");
WScript.Sleep(500);
WshShell.SendKeys("+%");
WScript.Sleep(500);
WshShell.SendKeys("^s");
}
}

