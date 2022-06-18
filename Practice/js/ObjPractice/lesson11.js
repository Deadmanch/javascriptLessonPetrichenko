const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
	let str = '';
	arr.lenght === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';
	arr.forEach(function(item) {
		str += `${item} `;
	});
	return str;
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) { 
	arr.forEach(city => {
console.log(city.toLowerCase());
	});
	}

	standardizeStrings(favoriteCities);


	// Вторая часть

	const someString = 'This is some strange string';

function reverse(str) {
	if(typeof(str) !== 'string') {
		return "Ошибка!";
	}
	return str.split('').reverse().join('');

}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
	let str = '';

	arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
	arr.forEach(function(curr) {
		if(curr !== missingCurr) {
			str += `${curr}\n`;
		}
	});

	return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'EUR'));
