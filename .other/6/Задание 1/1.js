/**********************************************************/
/* Имя: 1.js */
/* Язык: JScript */
/* Описание:  */
/* 1) Рассчет значений функции tg(x) в промежутке [0,1], с шагом 0.0001; */
/* 2) Вывод значений в консоль. */
/**********************************************************/
for(var i = 0.0; i <= 1.0; i += 0.001)
{
	WScript.Echo(Math.tan(i));
}
