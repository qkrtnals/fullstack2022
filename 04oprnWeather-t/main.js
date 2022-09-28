let temp = document.querySelector("#temp");
let min = document.querySelector("#min");
let max = document.querySelector("#max");
let wind = document.querySelector("#wind");
let weather = document.querySelector("#weather");
let icon = document.querySelector("#icon");
let icon_url =
  "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/";
let openweather_url =
  "https://api.openweathermap.org/data/2.5/find?q=Seoul&units=metric&appid=7d96bc5108f52b80e2d9075a369b9f35";

var ajaxrequest = new XMLHttpRequest();
function getWeatherfind() {
  ajaxrequest.open("GET", openweather_url);
  ajaxrequest.send();
  ajaxrequest.onreadystatechange = function () {
    if (ajaxrequest.readyState == 4) {
      response = JSON.parse(ajaxrequest.responseText);
      console.log(response);
      let wdata = response.list[0];
      let exdata = response.list[0].weather[0];
      temp.innerHTML = wdata.main.temp;
      min.innerHTML = wdata.main.temp_min;
      max.innerHTML = wdata.main.temp_max;
      wind.innerHTML = wdata.wind.speed;
      weather.innerText =
        wdata.weather[0].main + "," + wdata.weather[0].description;
      debugger;
    }
  };
}

getWeatherfind();
