#include <iostream>
#include <cmath>
 
using namespace std;
 
int main(){
	double x = 0;
	double res = 0;
	do{
	res = cos(x);
	x += 0.001;
	} while(true);
	return 0;
}
