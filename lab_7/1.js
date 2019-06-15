while(menu != 3){
  var a, b;

  WScript.Echo(
    "Меню:\n" +
    "1) Сравнение двух чисел\n" +
    "2) Вывод информации о WSH\n" +
    "3) Выйти\n" +
    "Выбор: "
  );
  var menu = WScript.StdIn.ReadLine();

  if (menu == "1"){
    WScript.Echo("Введите первое число:");
    a = WScript.StdIn.ReadLine();
    WScript.Echo("Введите второе число:");
    b = WScript.StdIn.ReadLine();
    if (parseInt(a) > parseInt(b)) WScript.Echo("Первое число больше\n");
    if (parseInt(a) < parseInt(b)) WScript.Echo("Второе число больше\n");
    else if(parseInt(a) === parseInt(b)) WScript.Echo("Числа равны\n");
  }

  if(menu == "2"){
    WScript.Echo(
      "Путь к исполняемому файлу сервера сценариев: " + WScript.FullName + "\n" +
      "Имя запущенного сценария: " + WScript.ScriptName + "\n" +
      "Версия WSH: " + WScript.Version + "\n"
    );
  }
}
