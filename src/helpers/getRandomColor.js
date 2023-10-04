const colorsList = [
	'#058A53',
	'#5EB169',
	'#6BD9B7',
	'#6DB9C9',
	'#6775B2',
	'#4E60A8',
	'#7A5699',
	'#C377B1',
	'#D8AFCD',
	'#EE4822',
	'#E72C02',
	'#E5BA5C',
	'#E58B33',
	'#B5BE56',
	'#70A934',
	'#93C95F',
	'#87CF8D',
];

const getRandomColor = () => {
	const randomIndex = Math.floor(Math.random() * colorsList.length);
	return colorsList[randomIndex];
};

export default getRandomColor;
