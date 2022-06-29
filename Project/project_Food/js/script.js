window.addEventListener('DOMContentLoaded', () => {

	// ** Табы
	let tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

	function hideTabsContent() {
		tabsContent.forEach((item) => {
			item.classList.remove('show', 'fade');
			item.classList.add('hide');
		});

		tabs.forEach((item) => {
			item.classList.remove('tabheader__item_active');
		});
	}

	function showTabsContent(i = 0) {
		tabsContent[i].classList.remove('hide');
		tabsContent[i].classList.add('show', 'fade');

		tabs[i].classList.add('tabheader__item_active');
	}

	hideTabsContent();
	showTabsContent();

	tabsParent.addEventListener('click', (e) => {
		const target = e.target;

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabsContent();
					showTabsContent(i);
				}
			});
		}
	});

	// ** Таймер


	// * Создаем дату окончания таймера
	const deadline = '2022-07-17';

	// * Функция, которая занимается расчетами нашего таймера 
	function getTimeRemaining(endtime) {
		let days, hours, minutes, seconds;
		const t = Date.parse(endtime) - Date.parse(new Date());
		// * Если дата окончания прошла, то выводим 0
		if (t <= 0) {
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
		} else {
			// * Превращаем милисекунды в дни, часы, минуты и секунды 
			days = Math.floor((t / (1000 * 60 * 60 * 24)));
			hours = Math.floor((t / (1000 * 60 * 60) % 24));
			minutes = Math.floor((t / 1000 / 60) % 60);
			seconds = Math.floor((t / 1000) % 60);
		}
		// * Возвращаем объект с переменными
		return {
			'total': t,
			days,
			hours,
			minutes,
			seconds
		};
	}
	// * Функция, которая добавляет 0 перед числом, если число меньше 10

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	// * Функция которая запускает таймер на сайте

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			minutes = timer.querySelector('#minutes'),
			hours = timer.querySelector('#hours'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);
		// * Запуск функции для инициализации текущей даты, чтобы не было секундной подгрузки данных
		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);
			// * Проверка, если дата окончания таймера прошла, то функция запуска таймера отключается
			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}
	setClock('.timer', deadline);

	// ** Модальное окно

	const modalTrigger = document.querySelectorAll('[data-modal]'),
		modal = document.querySelector('.modal'),
		modalCloseBtn = document.querySelector('[data-close]');
	// * Функция открытия модального окна
	function openModal() {
		modal.classList.toggle('show');
		document.body.style.overflow = 'hidden';
		clearInterval(modalTimerId);
	}
	// * Перебор всех кнопок с классом modal и навешивание обработчика событий клик с функцией открытия модального окна
	modalTrigger.forEach(btn => {
		btn.addEventListener('click', openModal);
	});


	// * Функция закрытия модального окна
	function closeModal() {
		modal.classList.toggle('show');
		document.body.style.overflow = '';
	}
	// * Навешиваем обработчик закрытия на крестик
	modalCloseBtn.addEventListener('click', closeModal);
	// * Навешиваем обработчик закрытия если пользователь кликнул вне формы на пустое пространство
	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			closeModal();
		}
	});
	// * Навешиваем обработчик закрытия если пользователь кликнул на Esc
	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modal.classList.contains('show')) {
			closeModal();
		}
	});
	// * Функция вызова модального окна через 3 сек
	const modalTimerId = setTimeout(openModal, 3000);
	// * Функция вызова модального окна когда пользователь долистал до конца страницы
	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			openModal();
			// * Отмена вызова модального окна если пользователь уже 1 раз долистал до конца и ему открылось модальное окно
			window.removeEventListener('scroll', showModalByScroll);
		}
	}
	window.addEventListener('scroll', showModalByScroll);


	// ** Используем классы для карточек

	class MenuCart {
		constructor(src, imgAlt, title, descr, price, parentSelector, ...classes) {
			this.src = src;
			this.imgAlt = imgAlt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.classes = classes;
			this.parent = document.querySelector(parentSelector);
			this.transfer = 27;
			this.changeToUAH();
		}

		changeToUAH() {
			this.price = this.price * this.transfer;
		}

		render() {
			const element = document.createElement('div');
			if (this.classes.length === 0) {
				this.element = 'menu__item';
				element.classList.add(this.element);
			} else {
				this.classes.forEach(className => element.classList.add(className));
			}

			element.innerHTML = `
		
					<img src = ${this.src} alt = ${this.imgAlt} >
					<h3 class = "menu__item-subtitle" > ${this.title} </h3> 
					<div class = "menu__item-descr" > ${this.descr} < /div> 
					<div class = "menu__item-divider"> 
					</div> 
					<div class = "menu__item-price">
					<div class = "menu__item-cost"> Цена: </div> 
					<div class = "menu__item-total"> <span> ${this.price} </span> грн/день </div> 
					</div> 
				
		`;
			this.parent.append(element);
		}
	}
	new MenuCart(
		"img/tabs/vegy.jpg",
		"vegy",
		'Меню "Фитнес"',
		'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
		9,
		'.menu .container',
		'menu__item',
		'big'
	).render();

	new MenuCart(
		"img/tabs/elite.jpg",
		"elite",
		'Меню “Премиум”',
		'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
		20,
		'.menu .container'
	).render();

	new MenuCart(
		"img/tabs/post.jpg",
		"post",
		'Меню "Постное"',
		'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
		12,
		'.menu .container',
		'menu__item'
	).render();
});