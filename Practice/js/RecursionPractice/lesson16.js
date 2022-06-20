"use strict";

function factorial(n) {
	// * Проверка является ли n числом или целое ли это число
     if (typeof(n) !== 'number' || !Number.isInteger(n)) {
				return 'Ошибка, проверьте данные';
		}

		if(n >= 1) {
			return n * factorial(n - 1);
		}else {
			return 1;
		}
}

console.log(factorial(-15));