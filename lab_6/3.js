function Recurs (i) {
	if (i == 1) return 1;
	else return Math.log(Recurs(i-1) * i) + 9;
}
