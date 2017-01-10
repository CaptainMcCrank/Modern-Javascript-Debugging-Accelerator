"use strict";
function power(x) {
	return function(power) {
		return Math.pow(x,power);
	}
}

function something() {
	var twoExp = power(2);
	alert(twoExp);
}
