var WS = WScript.CreateObject("WScript.Shell");
var Lnk = WS.Popup("—оздать на рабочем столе €рлык дл€ запуска сценари€ из задани€ 2?",0,"—оздание €рлыка",1);

if(Lnk == 1) {
	var PathMainProgram = WS.CurrentDirectory + "\\task2.bat";

	var PathLnk = WS.SpecialFolders("Desktop") + "\\2a.lnk";
	var link = WS.CreateShortcut(PathLnk);
	link.TargetPath = PathMainProgram;
	link.Arguments = "1";
	link.Save();

	PathLnk = WS.SpecialFolders("Desktop") + "\\2b.lnk";
	link = WS.CreateShortcut(PathLnk);
	link.TargetPath = PathMainProgram;
	link.Arguments = "2";
	link.Save();
}
