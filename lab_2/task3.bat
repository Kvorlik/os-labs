@echo off
set txt_dir=%1
for /r %txt_dir% %%i in (*.txt) do (
echo %%i
type %%i
echo.
)
