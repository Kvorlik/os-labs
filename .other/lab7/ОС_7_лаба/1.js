while(true){
var s;

WScript.Echo("����:");
WScript.Echo("1  - ��������� ���� �����, ��������� � ���������� ������������");
WScript.Echo("2  - ������� �� ����� ���� � ������������ ����� ������� ���������, ��� ����������� ��������, ������ WSH");
s = WScript.StdIn.ReadLine();

if(s == "2"){
WScript.Echo(WScript.FullName + "\n");
WScript.Echo(WScript.ScriptName + "\n");
WScript.Echo(WScript.Version + "\n");
}

else if (s == "1"){
var a, b;

WScript.Echo("������� ������ �����:"); 
a = WScript.StdIn.ReadLine();
WScript.Echo("������� ������ �����:");
b = WScript.StdIn.ReadLine();

if(parseInt(a)>parseInt(b)){
WScript.Echo("������ ����� ������"); 
}
else if(parseInt(a)<parseInt(b)){
WScript.Echo("������ ����� ������"); 
}
else{
WScript.Echo("����� �����"); 
}

}
}