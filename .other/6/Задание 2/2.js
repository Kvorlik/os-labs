/**********************************************************/
/* »м€: 2.js */
/* язык: JScript */
/* ќписание:  */
/*1) формирование матрицы (NxN) вида: */
/*1 7 7 7Е 7 */
/*4 1 7 7 Е7 */
/*4 4 1 7 Е7 */
/*Е */
/*4 4 4 4Е 1 */
/*2) вычисление количества элементов кратных 7; */
/*3) вычисление суммы элементов матрицы в каждой нечетной строке; */
/*4) вычисление произведени€ четных элементов в каждом нечетном столбце; */
/*5) вычисление суммы элементов выше побочной диагонали; */
/*6) сортировка каждой четной строки матрицы по возрастанию, каждой нечетной Ц по убыванию; */
/*7) вычисление обратной матрицы дл€ исходной; */
/*8) умножение исходной матрицы на сортированную; */
/*9) вывод результата умножени€ в одну строку. */
/**********************************************************/
/*”множение элемента матрицы на число*/
function NumMulMatr(A,M,Num)
{
	for (var i=0;i<M;i++) 
	{
		for (var j=0;j<M;j++) 
		{ 
			A[i][j] *= Num;
		}
	}
}
/*“рансопнирование матрицы*/
function TransposeMatr(A,M)
{
	Znach = new Array(M);
	for (var i=0;i<M;i++)
	{
		Znach[i] = new Array(M);
		for (var j=0;j<M;j++) 
		{ 
			Znach[i][j] = A[j][i];
		}
	}
	return Znach;
}
/*ѕоиск мирора дл€ вычислени€ определител€*/
function MinorMatr(Mass,Num,t)
{
	Znach = new Array(Num);
	for (var i=0;i<Num;i++) 
	{ 
		Znach[i] = new Array(Num);
	}
	for (var i=0;i<Num;i++)
	{
		var ElemMinorMatr = "";
		for (var j=0;j<Num;j++)
		{
			if (j<t) 
			{ 
				Znach[i][j] = Mass[i+1][j];
			}
			else 
			{ 
				Znach[i][j] = Mass[i+1][j+1];
			}
			ElemMinorMatr += Znach[i][j]+" ";
		}
	}
	return Znach;
}
/*ѕоиск определител€ матрицы*/
function DeterminantMatr(A,M)
{
	if (M<2) 
	{ 
		return 0;
	}
	if (M==2) 
	{
		return A[0][0]*A[1][1]-A[0][1]*A[1][0];
	}
	else
	{
		k = 0;
		for(var j=0;j<M;j++)
		{			
			Znach = MinorMatr(A,M-1,j);
			if (j%2==0) 
			{ 
				k+=A[0][j]*DeterminantMatr(Znach,M-1); 
			}
			else 
			{ 
				k-=A[0][j]*DeterminantMatr(Znach,M-1);
			}
		}
		return k;
	}
	return 0;
}
/*печать матрицы*/
function PrintMatrNxN(Mass)
{
	var TekStr = new Array(Mass.length);
	var PrintStr = "";
	for(var i = 0; i < N; i++)
	{
		TekStr[i] = "";
		for(var j = 0; j < N; j++)
		{
			TekStr[i] += " " + Mass[i][j];
		}
	}
	for(var i = 0; i < N; i++)
	{
		PrintStr = PrintStr+TekStr[i]+"\n";
	}
	WScript.Echo(PrintStr);
	delete TekStr;
}
/*1) формирование матрицы (NxN) специального вида*/
function CreateMatrNxN(N) 
{
	var NewMatr = new Array(N);
	for(var i = 0; i < N; i++)
	{
		NewMatr[i] = new Array(N);
	}
	for(var i = 0; i < N; i++)
	{
		for(var j = 0; j < N; j++)
		{
			if (i == j) 
			{
				NewMatr[i][j] = 1;
			}
			else
			{
				if (i > j) 
				{
					NewMatr[i][j] = 4;
				}
				else
				{
					NewMatr[i][j] = 7;
				}
			}
		}
	}
	return ( NewMatr );
}
/*2) вычисление количества элементов кратных 7*/
function ModSevenElemMatr(Mass)
{
	var ModElem = 0;
	for(var i = 0; i < N; i++)
	{
		for(var j = 0; j < N; j++)
		{
			if(Mass[i][j]%7 == 0) 
			{
				ModElem++;
			}
		}
	}
	return ModElem;
}
/*3) вычисление суммы элементов матрицы в каждой нечетной строке*/
function SumStModElemMatr(Mass)
{
	for(var i = 0; i < N; i++)
	{
		var SumElem = 0;
		if((i+1)%2 == 1)
		{
			for(var j = 0; j < N; j++)
			{
				SumElem+= Mass[i][j];
			}
			WScript.Echo("—умма элементов строки ",i+1," : ",SumElem);
		}
	}
}
/*4) вычисление произведени€ четных элементов в каждом нечетном столбце*/
function MulSbModElemMatr(Mass)
{
	for(var j = 0; j < N; j++)
	{
		var MulElem = 1;
		if((j+1)%2 == 1)
		{
			for(var i = 0; i < N; i++)
			{
				if(Mass[i][j]%2 == 0)
				{
					MulElem *= Mass[i][j];
				}
			}
			if(MulElem != 1) 
			{
				WScript.Echo("ѕроизведение четных элементов столбца",j+1,":",MulElem);
			}
			else 
			{
				WScript.Echo("¬ столбце",j+1,"нет четных элементов");
			}
		}
	}
}
/*5) вычисление суммы элементов выше побочной диагонали*/
function SumUpDiagonalElemMatr(Mass)
{
	var SumElem = 0;
	for(var i = 0; i < N; i++)
	{
		for(var j = 0; j < N; j++)
		{
			if((i+j)<(N-1)) 
			{
				SumElem += Mass[i][j];
			}
		}
	}
	return SumElem;
}
/*6) сортировка каждой четной строки матрицы по возрастанию, каждой нечетной Ц по убыванию*/
function SortMatr(Mass)
{
	for(var i = 0; i < N; i++)
	{
		if ((i+1)%2 == 0)
		{
			for(var k = 0; k < N; k++)
			{
				for(var j = k; j < N; j++)
				{
					if(Mass[i][j] < Mass[i][k]) 
					{
						var Mass2 = Mass[i][j];
						Mass[i][j] = Mass[i][k];
						Mass[i][k] = Mass2;
					}
				}
			}
		}
		else 
		{
			for(var k = 0; k < N; k++)
			{
				for(var j = k+1; j < N; j++)
				{
					if(Mass[i][j] > Mass[i][k]) 
					{
						var Mass2 = Mass[i][j];
						Mass[i][j] = Mass[i][k];
						Mass[i][k] = Mass2;
					}
				}
			}
		}
	}
}
/*7) вычисление обратной матрицы дл€ исходной*/
function ReverseMatr(A,M)
{
	var RMatr = TransposeMatr(A,M);
	var DetMatr = DeterminantMatr(A,M);
	NumMulMatr(RMatr,M,1/DetMatr);
	return RMatr;
}
/*8) умножение исходной матрицы на сортированную; 9) вывод результата умножени€ в одну строку*/
function OriginalMatrMulSortMatr(IshodMatr,SortMatr)
{
	var NewMulMatr = new Array(N);
	for(var i = 0; i < N; i++)
	{
		NewMulMatr[i] = new Array(N);
	}
	for(var i = 0; i < N; i++)
	{
		for(var j = 0; j < N; j++)
		{
			NewMulMatr[i][j] = 0;
			for(var k = 0; k < N; k++) 
			{
				NewMulMatr[i][j] += IshodMatr[i][k]*SortMatr[k][j];
			}
		}
	}	
	WScript.Echo("”множение исходной на отсортированную:");
	PrintMatrNxN(NewMulMatr);
	var ResLine = "";
	for(var i = 0; i < N; i++)
	{
		for(var j = 0; j < N; j++)
		{
			ResLine += " " + NewMulMatr[i][j];
		}
	}
	WScript.Echo("¬ывод результата в одну строку:");
	WScript.Echo(ResLine);	
}