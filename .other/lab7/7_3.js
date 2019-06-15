//*********************************************************************************
//Name: 7_3.js
//Language: JScript
//Description: Lab 7, Task 3
//*********************************************************************************

var WshShell, condition;
WshShell = WScript.CreateObject("WScript.Shell");
condition = WshShell.Popup("—оздать €рлыки дл€ запуска сценариев из задани€ 2?", 0, "—оздание €рлыков", 4);
if (condition == 6)
{
	var Path = WshShell.CurrentDirectory + "\\7_2.js";
	var linkPath = WshShell.SpecialFolders("Desktop") + "\\2a.lnk";
	var link = WshShell.CreateShortcut(linkPath);
	link.TargetPath = Path;
	link.Arguments = "1";
	link.Save();
	
	linkPath = WshShell.SpecialFolders("Desktop") + "\\2b.lnk";
	link = WshShell.CreateShortcut(linkPath);
	link.TargetPath = Path;
	link.Arguments = "2";
	link.Save();
}