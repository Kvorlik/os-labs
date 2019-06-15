@echo off
set filename=%1
if exist %filename% (
attrib +s %filename%
) else (
echo File not found
)
