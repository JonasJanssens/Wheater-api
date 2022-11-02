
let button = document.getElementById('search');
let input = document.getElementById('input');

let appid = 'de625f1f8165599e18072ce6032a37fe';
let cityName = function() {
	let text = input.value;
	fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=5&appid=${appid}`)
	.then((res)=> res.json())
	.then((res) =>{
		let lat = res[0].lat;
		let lon = res[0].lon;

		fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`)
		.then((res) => res.json())
		.then((res) =>{
			let temp = Math.floor(res.main.temp-273.15);
			let clouds = res.clouds;
			let wind = res.wind.deg;
			console.log(temp);
			console.log(clouds)
			console.log(wind);
		});
	
	});
	
};







button.addEventListener('click', cityName);