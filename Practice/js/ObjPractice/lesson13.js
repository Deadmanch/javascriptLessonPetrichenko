"use strict";

const shoppingMallData = {
    shops: [
        {
            width: 10, 
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5, // Высота помещенья
    moneyPer1m3: 30, // Стоимость отопления за 1 куб.м.
    budget: 50000 // Бюджет на оплату отопления за 1 месяц
};

function isBudgetEnough(data) {
    let square = 0,
				volume = 0;

				data.shops.forEach(shop => {
					square += shop.width * shop.length;
				});
				volume = data.height * square;

				if(data.budget - (volume * data.moneyPer1m3) >= 0) {
					return 'Бюджета достаточно';
				}else {
					return 'Бюджета не достаточно';
				}
} 

console.log(isBudgetEnough(shoppingMallData));