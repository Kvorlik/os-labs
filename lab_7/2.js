objArgs = WScript.Arguments;

if (objArgs.Count() == 0)
WScript.Echo("Аргумент не задан. Введите '?' чтобы вывести справку");

else if (objArgs(0) == "?") {
	WScript.Echo(
		"'1' Вывести имена и содержимое всех системных переменных окружения\n" +
		"'2' Выводит все специальные папки\n"
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
		"\nСистемные:\n" + sys +
		"\nПользовательские:\n" + usr +
		"\nВременные:\n" + vol +
		"\nТекущий процесс:\n" + prc
	);
}

else if(objArgs(0) == "2"){
	var WS = WScript.CreateObject("WScript.Shell");
	PrintFolders = WS.SpecialFolders;
	WScript.Echo("Специальные папки:");
	for(var i = 0; i < PrintFolders.Count(); i++) WScript.Echo(PrintFolders(i));
	WScript.Echo("\n");
}
