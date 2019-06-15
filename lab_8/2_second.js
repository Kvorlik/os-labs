var WshShell = WScript.CreateObject("WScript.Shell");
WScript.Sleep(30000);
WshShell.RegDelete("HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run\\2_second");
WshShell.RegWrite("HKEY_CURRENT_USER\\Control Panel\\Colors\\Window","255 255 255","REG_SZ");
WshShell.RegWrite("HKEY_CLASSES_ROOT\\lnkfile\\IsShortcut","","REG_SZ");
WshShell.RegDelete("HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Policies\\Explorer\\NoDrives");
