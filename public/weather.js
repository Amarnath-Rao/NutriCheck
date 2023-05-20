/*
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPosition, showError, {
      maximumAge: 10,
      timeout: 100,
      enableHighAccuracy: false,
  });
}



function getPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  //document.getElementById("latitude").innerHTML = "Latitude: " + latitude;
  //document.getElementById("longitude").innerHTML = "Longitude: " + longitude;
  
  const accessToken = 'pk.ae51b83f73fb709a2c3601fe21562ab0';
  

fetch(`https://us1.locationiq.com/v1/reverse?key=${accessToken}&lat=${latitude}&lon=${longitude}&format=json`)
.then(response => response.json())
.then((response) => {
console.log(response)
cityWeather(response.address.city||response.address.village)


})
.catch(err => console.error(err));

}

function showError(error) {
  console.log(error);
  alert("Can't read your location!");
}

function cityWeather(city){

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '54df141db5msh2aac95101b50e9ap1632b0jsn877ec64b46af',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
  .then(response => response.json())
  .then((response) => {

    console.log(response)

    humidity.innerHTML = response.humidity
    temp.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    min_temp.innerHTML = response.min_temp

    checker(response)

  })
.catch(err => console.error(err));
}
const checker = (response) => {
  if (response.humidity >= 0 && response.humidity <30) {
    hum.innerHTML = "Low"
  }
  else if (response.humidity <=30 && response.humidity >50 ){
    hum.innerHTML = "Ideal"
  }
  else if(response.humidity >= 50 && response.humidity <70){
    hum.innerHTML = "High"
  }
    else if(response.humidity >=70 && response.humidity <100){
      hum.innerHTML = "Extremely High"
    }
} */







//new one
//const { data } = require("autoprefixer");

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '54df141db5msh2aac95101b50e9ap1632b0jsn877ec64b46af',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

// up one is for weather api
// down one is for enabling location 

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPosition, showError, {
      maximumAge: 10,
      timeout: 100,
      enableHighAccuracy: false,
  });
}


//down one is for enabling location 

function getPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  
  cityWeather(latitude,longitude)
  const accessToken = 'pk.ae51b83f73fb709a2c3601fe21562ab0';
  return longitude,latitude;
}

// for error

function showError(error) {
  console.log(error);
  alert("Can't read your location!");
}

// finding weather from lat long
var hum;
var tem;
function cityWeather(lat,long){
console.log(lat,long)
fetch(`https://api.weatherapi.com/v1/current.json?key=b264f5a9b6cf4cd68a3105228230805&q=${lat},${long}&aqi=no`)
  .then(response => response.json())
  .then((response) => {

    console.log(response)

    hum= response.current.humidity
    humidity.innerHTML = hum
    tem = response.current.temp_c
    temp.innerHTML = tem
    feels_like.innerHTML = response.current.feelslike_c
    min_temp.innerHTML = response.current.condition.text

    //checker(response)
    return lat,long;

  })
.catch(err => console.error(err));
}

// geocoding

//const apiKey = '94f9b156f2msh04caa31d238743ap187692jsn95f450596fe3';

async function customCityWeather(cityName) {
  console.log("HEllo");
  const url2 =
    `https://geocoding-by-api-ninjas.p.rapidapi.com/v1/geocoding?city=${cityName}`;
  const options2 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "94f9b156f2msh04caa31d238743ap187692jsn95f450596fe3",
      "X-RapidAPI-Host": "geocoding-by-api-ninjas.p.rapidapi.com",
    },
  };

  fetch(url2, options2)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0].latitude, data[0].longitude);
      cityWeather(data[0].latitude,data[0].longitude);
    })
    .catch((err) => console.error(err));
}

//lat long go to city weather 

const cityInput = document.getElementById('city-input');
const cityInputButt = document.getElementById('city-input-butt');
cityInputButt.addEventListener('click', async (event) => {
 const cityName = cityInput.value;
 customCityWeather(cityName)
 //cityWeather(coordinates.lat, coordinates.lng);
});



/*
function getFood(latitude, longitude) {
  
  console.log("Latitude",longitude);

  
  /*
  fetch(`https://api.geoapify.com/v1/places/around?categories=food-beverages&lat=${latitude}&lon=${longitude}&radius=5000&limit=10&apiKey=API_KEY_HERE`)
    .then(response => response.json())
    .then((response) => {
      console.log(response);
      // process the food data as required
    })
    .catch(err => console.error(err));

  }
*/






//gpt working
async function generateChatResponse() {
  const command = `if the temperature is ${tem} and humidity is ${hum} what food should i eat mention in 5 points (seasonal food included) and also give alternatives for sugar and bp patients based on general recommendations`;
    
    console.log(command)
    alert("This may take time! please wait until it loads!!");
    console.log("This may take time! please wait ")
    fetch(`http://localhost:3210/${encodeURIComponent(command)}`)
  .then(response => response.json())
  .then((data) => 
  { 
    console.log(data)
    var ab = document.getElementById("food")
  ab.innerHTML=data.choices['0'].message.content;
  console.log(data.choices['0'].message.content)
  })
  .catch(error => console.error(error));
 
}

const getFood = document.getElementById('getfood')
 getFood.addEventListener('click', generateChatResponse)



function getf(latitude,longitude){
  getPosition()
  let a=latitude;
  let b=longitude;
  console.log(a,b);
}





















// working geocoding
/*
const url2 = 'https://geocoding-by-api-ninjas.p.rapidapi.com/v1/geocoding?city=Hyderabad';
const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '94f9b156f2msh04caa31d238743ap187692jsn95f450596fe3',
		'X-RapidAPI-Host': 'geocoding-by-api-ninjas.p.rapidapi.com'
	}
};

fetch(url2,options2)
   .then(response => response.json())
   .then(data => {
    console.log(data[0].latitude,data[0].longitude );
   })


s





const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '94f9b156f2msh04caa31d238743ap187692jsn95f450596fe3',
		'X-RapidAPI-Host': 'referential.p.rapidapi.com'
	}
};

const API_KEY = '94f9b156f2msh04caa31d238743ap187692jsn95f450596fe3';
const address = 'New Delhi';
const url = `https://referential.p.rapidapi.com/v1/city=${address}`;
fetch(url,options1)
  .then(response => response.json())
  .then(data => {
    if (data.status === 'OK') {
      const { lat, lng } = data.results[0].geometry.location;
      console.log(`Latitude: ${lat}, Longitude: ${lng}`);
    } else {
      console.log(data.status);
    }
  })
  .catch(error => console.error(error));

*/



const checker = (response) => {
  if (response.humidity >= 0 && response.humidity <30) {
    hum.innerHTML = "Low"
  }
  else if (response.humidity <=30 && response.humidity >50 ){
    hum.innerHTML = "Ideal"
  }
  else if(response.humidity >= 50 && response.humidity <70){
    hum.innerHTML = "High"
  }
    else if(response.humidity >=70 && response.humidity <100){
      hum.innerHTML = "Extremely High"
    }
}
  