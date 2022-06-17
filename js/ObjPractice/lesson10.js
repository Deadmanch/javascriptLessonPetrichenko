"use strict";

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
	showAgeandLangs: function(param) {
		const {age} = param;
		const {languages} = param.skills;

		let str = `Мне ${age} и я владею языками: `;
		languages.forEach(function(lang) {
			str += `${lang.toUpperCase()} `
		})
		return str;
	}
};
console.log(personalPlanPeter.showAgeandLangs(personalPlanPeter));

function showExperience(param) {
	const {exp} = param.skills;
	return exp;
}

console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(param) {
	let str = '';
	const {programmingLangs} = param.skills;
	for(let k in programmingLangs) {
		str += `Язык ${k} изучен на ${programmingLangs[k]} \n`;
	}
	return str;
}

console.log(showProgrammingLangs(personalPlanPeter));