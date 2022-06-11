"use strict";
function sayHello(name) {
	return `Привет, ${name}!`;
}

console.log(sayHello('Лена'));

function returnNeighboringNumbers(arg) {
	return [arg - 1, arg, arg + 1];

}

console.log(returnNeighboringNumbers(6));


function getMathResult(arg, count) {
	if(typeof(count) !== 'number' || count <= 0) {
		return arg;
	}
	let str = '';
	for(let i = 1; i <= count; i++) {
		if(i === count) {
			str += `${arg * i}`;
		}else {
			str += `${arg * i}- - -`;
		}
	}
	return str;
}
console.log(getMathResult(5,5));