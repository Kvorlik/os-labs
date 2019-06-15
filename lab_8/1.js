var condition, action;
var WshShell = WScript.CreateObject("WScript.Shell");
condition = WshShell.Popup("Запустить калькулятор?", 0, "Калькулятор", 4);
if (condition == 6) {
	WshShell.LogEvent(0,"Пользователь запустил калькулятор");
	action = WshShell.Exec("calc");
	WScript.Sleep(1000);
	WshShell.AppActivate(action.ProcessID);
	WshShell.SendKeys("3{+}2~");
	WshShell.SendKeys("^C");
	WScript.Sleep(1000);
	WshShell.AppActivate(action.ProcessID);
	WshShell.SendKeys("%{F4}");
	condition = WshShell.Popup("Открыть блокнот?", 0, "Блокнот", 4);
	if (condition == 6) {
		WshShell.LogEvent(0,"Пользователь открыл блокнот");
		action = WshShell.Exec("notepad");
		WScript.Sleep(1000);
		WshShell.AppActivate(action.ProcessID);
		WshShell.SendKeys("Результат вычислений:~");
		WshShell.SendKeys("3{+}2=^V~");
		WshShell.SendKeys("Конец~");
		condition = WshShell.Popup("Сохранить результат вычислений?", 0 , "Результат", 4);
		if (condition == 6) {
			WshShell.LogEvent(0,"Пользователь сохранил результат вычислений");
			WshShell.SendKeys("^S");
			WshShell.SendKeys("Результат~");
			WshShell.AppActivate(action.ProcessID);
			WshShell.SendKeys("%{F4}");
		}
		else {
			WshShell.LogEvent(0,"Пользователь не сохранил результат вычислений");
			WshShell.AppActivate(action.ProcessID);
			WshShell.SendKeys("%{F4}{right}~");
		}
	}
	else WshShell.LogEvent(0,"Пользователь не открыл блокнот");
}
else WshShell.LogEvent(0,"Пользователь не запустил калькулятор");
