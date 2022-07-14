const countriesSelectBox = document.getElementById("country")
const citiesSelectBox = document.getElementById("city")

let citiesData = {
	iran: ["Tabriz", "Tehran", "Shiraz", "Esfahan", "Mashhad"],
	turkey: ["Istanbul", "Izmir", "Ankara", "Antalya"],
	usa: ["Los Angles", "Washington", "Chicago", "New York", "San Diego"],
}

countriesSelectBox.addEventListener('change' , () => {
	let countryName = countriesSelectBox.value
	let countryCities = citiesData[countryName]

	citiesSelectBox.innerHTML = ' '

	countryCities.forEach(city => {
		citiesSelectBox.innerHTML += '<option>' + city + '</option>'
	});
})