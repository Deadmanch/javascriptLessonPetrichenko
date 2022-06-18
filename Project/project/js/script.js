/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

// Получение элементов на странице 

const advertising = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');


// Удаление рекламных блоков
    advertising.forEach(items => {
    items.remove();
});

// Изменение жанра фильма
genre.textContent = 'драма';

// Изменение главной картинки фильма
poster.style.backgroundImage = "url(img/bg.jpg)";


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// Удаление статичного списка фильмов
movieList.innerHTML = "";

// Сортировка фильмов по алфавиту
movieDB.movies.sort();

// Перебор массива и выведение его на страницу в виде списка
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});



 

