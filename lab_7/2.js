objArgs = WScript.Arguments;

if (objArgs.Count() == 0)
WScript.Echo("�������� �� �����. ������� '?' ����� ������� �������");

else if (objArgs(0) == "?") {
	WScript.Echo(
		"'1' ������� ����� � ���������� ���� ��������� ���������� ���������\n" +
		"'2' ������� ��� ����������� �����\n"
	);
}

else if(objArgs(0) == "1"){
	var WshShell = WScript.CreateObject("WScript.Shell")
	var WshEnvirSys = new Enumerator(WshShell.Environment("SYSTEM"));
	var WshEnvirUsr = new Enumerator(WshShell.Environment("USER"));
	var WshEnvirVol = new Enumerator(WshShell.Environment("VOLATILE"));
	var WshEnvirPrc = new Enumerator(WshShell.Environment("PROCESS"));

	var sys="", usr="", vol="", prc="";
	for (; !WshEnvirSys.atEnd(); WshEnvirSys.moveNext()) sys += WshEnvirSys.item() + "\n";
	for (; !WshEnvirUsr.atEnd(); WshEnvirUsr.moveNext()) usr += WshEnvirUsr.item() + "\n";
	for (; !WshEnvirVol.atEnd(); WshEnvirVol.moveNext()) vol += WshEnvirVol.item() + "\n";
	for (; !WshEnvirPrc.atEnd(); WshEnvirPrc.moveNext()) prc += WshEnvirPrc.item() + "\n";

	WScript.Echo(
		"\n���������:\n" + sys +
		"\n����������������:\n" + usr +
		"\n���������:\n" + vol +
		"\n������� �������:\n" + prc
	);
}

else if(objArgs(0) == "2"){
	var WS = WScript.CreateObject("WScript.Shell");
	PrintFolders = WS.SpecialFolders;
	WScript.Echo("����������� �����:");
	for(var i = 0; i < PrintFolders.Count(); i++) WScript.Echo(PrintFolders(i));
	WScript.Echo("\n");
}
