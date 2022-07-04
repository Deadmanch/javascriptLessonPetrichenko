'use strict';

const funds = [{
		amount: -1400
	},
	{
		amount: 2400
	},
	{
		amount: -1000
	},
	{
		amount: 500
	},
	{
		amount: 10400
	},
	{
		amount: -11400
	}
];

const getPositiveIncomeAmount = (data) => {
	return data.filter(num => num.amount > 0).reduce((acc, sum) => acc + sum.amount, 0)
};

console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
	return data.some(num => num.amount < 0) ? data.reduce((acc, sum) => acc + sum.amount, 0) : getPositiveIncomeAmount(data);
};

console.log(getTotalIncomeAmount(funds));