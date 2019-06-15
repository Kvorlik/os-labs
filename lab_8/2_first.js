var WshShell = WScript.CreateObject("WScript.Shell");
WshShell.RegWrite("HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run\\2_second","C:\\Users\\switch\\Desktop\\OS\\lab_8\\2_second.bat","REG_SZ");
WshShell.RegWrite("HKEY_CURRENT_USER\\Control Panel\\Colors\\Window","255 000 000","REG_SZ");
WshShell.RegDelete("HKEY_CLASSES_ROOT\\lnkfile\\IsShortcut");
WshShell.RegWrite("HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Policies\\Explorer\\NoDrives",4,"REG_DWORD");
WshShell.Exec("SHUTDOWN -r -f -t 15");
