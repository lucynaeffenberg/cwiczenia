// alert('Hello 1234');
window.onload = function() {
	changeBgColor('intro', 'red', 'white');
	changeBgColor('content', 'yellow', 'blue');
}

function changeBgColor(elemid, bgcolor, txtcolor) {
	this.document.getElementById(elemid).style.backgroundColor = bgcolor;
	this.document.getElementById(elemid).style.color = txtcolor;
}

/*
function sumThree(a, b, c) {
	let sum = a + b + c;
	return sum;
}

function calcVat(price, vat) {
	let brutto = price * vat;
	return brutto;
}
*/

// let netPrice = sumThree(795, 200, 5);
// cena dystrybutora + marża + cena pakowania

// let vatPrice = calcVat(netPrice, 0.23);

// let grossPrice = netPrice + vatPrice;

// console.log(grossPrice);

// pensja brutto 3500
// podatek 12%

function calcSalary(salary, vat, nfz, luxmed) {
	let calc = (salary / vat) - nfz - luxmed;
	calc = calc + ' PLN';
	return calc;
}

let netSalary = calcSalary(15000, 1.12, 1200, 0);
console.log(netSalary);
