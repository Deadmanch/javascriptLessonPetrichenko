"use strict";

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
    start: function() {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
    },
    rememberMyFilms: function() {
        for(let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов?', ''.trim()),
          b = prompt('На сколько оцените его?', '');
		  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
    },
    detectPersonalLevel: function() {
 if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);   
    }
    },
    writeYourGenres: function() {
    for(let i = 0; i < 2; i++) {
        let genres = prompt('Введите ваш любимый жанр'.toLowerCase);

        if(genres === '' || genres == null) {
            console.log('Вы ввели некорректные данные или не ввели их вовсе')
            i--;
        }else {
            personalMovieDB.genres = genres.split(', ');
            personalMovieDB.genres.sort();
        }
    }

    personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр  ${i + 1} - это ${item} `)
    })
    },
    toogleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false
        }else {
            personalMovieDB.privat = true
        }
    }
};








