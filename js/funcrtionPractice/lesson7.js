"use strict";

function calculateVolumeAndArea(cubeEdgeLength) {
	if(!Number.isInteger(cubeEdgeLength) || typeof(cubeEdgeLength) !== 'number' || cubeEdgeLength < 0) {
		return "При вычислении произошла ошибка";
	}

	let volume = 0,
			area = 0;

			volume = Math.pow(cubeEdgeLength, 3);
			area = 6 * Math.pow(cubeEdgeLength, 2);

			return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

console.log(calculateVolumeAndArea(-15.5));

// Место для второй задачи
function getCoupeNumber(seatOfTheTrain) {
if(!Number.isInteger(seatOfTheTrain) || typeof(seatOfTheTrain) !== 'number' || seatOfTheTrain < 0) {
		return "Ошибка. Проверьте правильность введенного номера места";
	}

if(seatOfTheTrain == 0 || seatOfTheTrain > 36) {
	return "Таких мест в вагоне не существует";
}

return Math.ceil(seatOfTheTrain / 4);
}

console.log(getCoupeNumber('Hello'));
console.log(getCoupeNumber(10));
console.log(getCoupeNumber(300));
console.log(getCoupeNumber(32));