let inp = document.querySelector("#inp");

inp.addEventListener("keypress", (e) => {
  if (e.keyCode == "13") {
    getCity(inp.value);
    inp.value = "";
    document.querySelector("#center").style.display = "block";
  }
});

async function getCity(cityName) {
  let weather = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c358c9314e91f4abef4361069198898f&lang=eng&units=metric`;

  let response = await fetch(weather);
  let data = await response.json();

  let city = document.querySelector("#city-name");
  city.innerHTML = `<b>City:</b> <p>${data.name}, ${data.sys.country}</p>`;

  let temp = document.querySelector("#temp");
  temp.innerHTML = `<b>Temperature:</b> <p>${Math.round(data.main.temp)}℃ </p>`;

  let description = document.querySelector("#description");
  description.innerHTML = `<b>Short describtion:</b> <p>${data.weather[0].description}</p>`;

  let minmax = document.querySelector("#minmax");
  minmax.innerHTML = `<b>Min/max temperature:</b> <p>${Math.round(data.main.temp_min)}℃ / ${Math.round(
    data.main.temp_max
  )}℃ </p>`;

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `<b>Humidity:</b> <p>${data.main.humidity}% </p>`;

  let wind = document.querySelector("#wind");
  wind.innerHTML = `<b>Speed of wind:</b> <p>${data.wind.speed} m/s. </p>`;

  console.log(data);
}
