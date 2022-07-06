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
		modal = document.querySelector('.modal');

	// * Перебор всех кнопок с классом modal и навешивание обработчика событий клик с функцией открытия модального окна
	modalTrigger.forEach(btn => {
		btn.addEventListener('click', openModal);
	});
	// * Функция закрытия модального окна
	function closeModal() {
		modal.classList.add('hide');
		modal.classList.remove('show');
		document.body.style.overflow = '';
	}
	// * Функция открытия модального окна
	function openModal() {
		modal.classList.add('show');
		modal.classList.remove('hide');
		document.body.style.overflow = 'hidden';
		clearInterval(modalTimerId);
	}

	// * Навешиваем обработчик закрытия на крестик
	// * Навешиваем обработчик закрытия если пользователь кликнул вне формы на пустое пространство
	modal.addEventListener('click', (e) => {
		if (e.target === modal || e.target.getAttribute('data-close') == "") {
			closeModal();
		}
	});
	// * Навешиваем обработчик закрытия если пользователь кликнул на Esc
	document.addEventListener('keydown', (e) => {
		if (e.code === "Escape" && modal.classList.contains('show')) {
			closeModal();
		}
	});
	// * Функция вызова модального окна через 30 сек
	const modalTimerId = setTimeout(openModal, 300000);
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

	class MenuCard {
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
					<div class = "menu__item-descr" > ${this.descr} </div> 
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
	const getResource = async (url) => {
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status ${res.status}`);
		}

		return await res.json();
	}

	getResource('http://localhost:3000/menu')
		.then(data => {
			data.forEach(({
				img,
				altimg,
				title,
				descr,
				price
			}) => {
				new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
			});
		});

	// ** Формы(отправка и получение данных)
	const forms = document.querySelectorAll('form');
	const message = {
		loading: 'img/form/spinner.svg',
		success: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...'
	};

	forms.forEach(item => {
		bindPostData(item);
	});

	const postData = async (url, data) => {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=utf-8'
			},
			body: data
		});

		return await res.json();
	}

	function bindPostData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessage = document.createElement('img');
			statusMessage.src = message.loading;
			statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
			form.insertAdjacentElement('afterend', statusMessage);
			const formData = new FormData(form);

			const json = JSON.stringify(Object.fromEntries(formData.entries()));
			postData('http://localhost:3000/requests', json)
				.then(data => {
					console.log(data);
					showThanksModal(message.success);
					statusMessage.remove();
				}).catch(() => {
					showThanksModal(message.failure);
				}).finally(() => {
					form.reset();
				})

			function showThanksModal(message) {
				const prevModalDialog = document.querySelector('.modal__dialog');

				prevModalDialog.classList.add('hide');
				openModal();

				const thanksModal = document.createElement('div');
				thanksModal.classList.add('modal__dialog');
				thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
				document.querySelector('.modal').append(thanksModal);
				setTimeout(() => {
					thanksModal.remove();
					prevModalDialog.classList.add('show');
					prevModalDialog.classList.remove('hide');
					closeModal();
				}, 4000);
			}
		});
	}
	fetch('http://localhost:3000/menu')
		.then(data => data.json())
		.then(res => console.log(res));
});