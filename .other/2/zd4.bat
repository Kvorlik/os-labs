@ECHO OFF
chcp 1251
IF "%1"=="/?" (
cls
ECHO Данная программа служит для резервного копирования каталога
ECHO Функция 1: замещение файлов. Файлы из исходного каталога замещают файлы резервного
ECHO Функция 2: добавление файлов. Если в резервном каталоге файла не существует, то он добавляется из исходного, прочие файлы не заменяются
ECHO Функция 3: удаление файлов. Если в резервном каталоге существует файл, которого нет в исходном, то он удаляется
ECHO Исходный каталог и каталог для резервного копирования задаётся пользователем. Если каталог для резервного копирования не указан, то Backup будет создан в той же папке, что и исходный каталог
GOTO END
)

cd %~dp0
cls
set /p from="Введите адрес папки, откуда будет производиться копирование: "
cd %from%
if ERRORLEVEL 1 (
GOTO END
)
cls
set to=
set /p to="Введите имя папки резервного копирования: "
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
ECHO 1) Замещение файлов
ECHO 2) Добавление файлов
ECHO 3) Удаление файлов
set /p command="Введите комманду: "
IF "%command%"=="1" (
GOTO COMMAND1
)
IF "%command%"=="2" (
GOTO COMMAND2
)
IF "%command%"=="3" (
GOTO COMMAND3
)
ECHO Ошибка ввода команды
GOTO END

:COMMAND1
robocopy %from% ..\%to% /IS /E 
cls
ECHO Выполнение комманды завершено
GOTO END

:COMMAND2
cd %from%
FOR %%i in (*) do (
ECHO %%i
IF NOT EXIST ..\%to%\%%i (
COPY %%i ..\%to%\
)
)
ECHO Выполнение комманды завершено
GOTO END

:COMMAND3
cd ..\%to%
FOR %%i in (*) do (
ECHO %from%\%%~nxi
IF NOT EXIST %from%\%%~nxi (
del %%i
)
)
ECHO Выполнение комманды завершено
GOTO END

:END
PAUSE