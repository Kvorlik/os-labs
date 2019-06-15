@echo off
set /p a="Enter a "
set /p b="Enter b "
if %a% gtr %b% (
	echo "a > b"
) else (
	if %a% lss %b% (
		echo "a < b"
	) else (
		echo "a = b"
	)	
)
pause