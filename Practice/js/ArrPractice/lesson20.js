'use strict';

const films = [{
		name: 'Titanic',
		rating: 9
	},
	{
		name: 'Die hard 5',
		rating: 5
	},
	{
		name: 'Matrix',
		rating: 8
	},
	{
		name: 'Some bad film',
		rating: 4
	}
];

function showGoodFilms(arr) {
	return arr.filter(films => films.rating >= 8);
}

console.log(showGoodFilms(films));

function showListOfFilms(arr) {
	return arr.reduce((acc, sum) => `${typeof(acc) === 'object' ? acc.name : acc}, ${sum.name}`);
}

console.log(showListOfFilms(films));

function setFilmsIds(arr) {
	return arr.map((films, i) => {
		films.id = i;
		return films;
	});
}

console.log(setFilmsIds(films));

// ! При срабатывании every на первом фильме он натыкается на id = 0;
// ! 0 - это неправда в логическом ключе, поэтому и весь метод возвращает false
// ! Учитывайте этот момент

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
	return arr.every(film => film.id || film.id === 0)
}