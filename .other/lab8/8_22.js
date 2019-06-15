//*********************************************************************************
//Name: 8_2.js
//Language: JScript
//Description: Lab 8, Task 2
//*********************************************************************************

var WshShell = WScript.CreateObject("WScript.Shell");

WScript.Sleep(30000);
WshShell.RegDelete("HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Policies\\Explorer\\NoDrives");
WshShell.RegDelete("HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run\\8_22");
WshShell.Regwrite("HKEY_CLASSES_ROOT\\lnkfile\\IsShortcut","","REG_SZ");
WshShell.Exec("regedit C:\\all.reg");