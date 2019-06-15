#include <iostream>
#include <cmath>
 
using namespace std;
 
int main(){
	double x = 0;
	double res = 0;
	do{
	res = sin(x);
	x += 0.01;
	} while(true);
	return 0;
}
