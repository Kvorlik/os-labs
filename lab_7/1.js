while(menu != 3){
  var a, b;

  WScript.Echo(
    "����:\n" +
    "1) ��������� ���� �����\n" +
    "2) ����� ���������� � WSH\n" +
    "3) �����\n" +
    "�����: "
  );
  var menu = WScript.StdIn.ReadLine();

  if (menu == "1"){
    WScript.Echo("������� ������ �����:");
    a = WScript.StdIn.ReadLine();
    WScript.Echo("������� ������ �����:");
    b = WScript.StdIn.ReadLine();
    if (parseInt(a) > parseInt(b)) WScript.Echo("������ ����� ������\n");
    if (parseInt(a) < parseInt(b)) WScript.Echo("������ ����� ������\n");
    else if(parseInt(a) === parseInt(b)) WScript.Echo("����� �����\n");
  }

  if(menu == "2"){
    WScript.Echo(
      "���� � ������������ ����� ������� ���������: " + WScript.FullName + "\n" +
      "��� ����������� ��������: " + WScript.ScriptName + "\n" +
      "������ WSH: " + WScript.Version + "\n"
    );
  }
}
