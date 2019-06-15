@echo off
for %%i in (%1\*.txt) do (
	echo %%i
	type %%i
)