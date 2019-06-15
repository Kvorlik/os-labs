@ECHO OFF
chcp 1251
IF "%1"=="/?" (
cls
ECHO ������ ��������� ������ ��� ���������� ����������� ��������
ECHO ������� 1: ��������� ������. ����� �� ��������� �������� �������� ����� ����������
ECHO ������� 2: ���������� ������. ���� � ��������� �������� ����� �� ����������, �� �� ����������� �� ���������, ������ ����� �� ����������
ECHO ������� 3: �������� ������. ���� � ��������� �������� ���������� ����, �������� ��� � ��������, �� �� ���������
ECHO �������� ������� � ������� ��� ���������� ����������� ������� �������������. ���� ������� ��� ���������� ����������� �� ������, �� Backup ����� ������ � ��� �� �����, ��� � �������� �������
GOTO END
)

cd %~dp0
cls
set /p from="������� ����� �����, ������ ����� ������������� �����������: "
cd %from%
if ERRORLEVEL 1 (
GOTO END
)
cls
set to=
set /p to="������� ��� ����� ���������� �����������: "
cd ..
if "%to%"=="" (
md Backup
set to=Backup
cd Backup
GOTO MENU
)
cd %to%>nul
cls
if ERRORLEVEL 1 (
md %to%
cd %to%
)

:MENU
cd ..\%from%
cls
ECHO 1) ��������� ������
ECHO 2) ���������� ������
ECHO 3) �������� ������
set /p command="������� ��������: "
IF "%command%"=="1" (
GOTO COMMAND1
)
IF "%command%"=="2" (
GOTO COMMAND2
)
IF "%command%"=="3" (
GOTO COMMAND3
)
ECHO ������ ����� �������
GOTO END

:COMMAND1
robocopy %from% ..\%to% /IS /E 
cls
ECHO ���������� �������� ���������
GOTO END

:COMMAND2
cd %from%
FOR %%i in (*) do (
ECHO %%i
IF NOT EXIST ..\%to%\%%i (
COPY %%i ..\%to%\
)
)
ECHO ���������� �������� ���������
GOTO END

:COMMAND3
cd ..\%to%
FOR %%i in (*) do (
ECHO %from%\%%~nxi
IF NOT EXIST %from%\%%~nxi (
del %%i
)
)
ECHO ���������� �������� ���������
GOTO END

:END
PAUSE