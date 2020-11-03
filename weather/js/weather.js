const apiURL ="//api.openweathermap.org/data/2.5/forecast?id=1835847&appid=6c3537dc7701b1d2d52795e48bb67bd3&units=imperial";

const d = new Date();
const todayDayNumber = d.getDay();

const myweekday = new Array(7);
myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";

fetch (apiURL)
.then((response) => response.json())
.then((weatherInfo) => {
    console.log(weatherInfo);

    let cityName = document.createElement("h1");
    cityName.textContent = `Weather conditions for ${weatherInfo.city.name}, ${weatherInfo.city.country}`;
    document.getElementById('location').appendChild(cityName);


    let forecastDayNumber = todayDayNumber;
    console.log(forecastDayNumber);

    for (i = 0; i < weatherInfo.list.length; i++) {
        var time = weatherInfo.list[i].dt_txt;
        if (time.includes('06:00:00')) {
            forecastDayNumber += 1;
            if (forecastDayNumber === 7) {
                forecastDayNumber = 0;
            }

            let theDayName = document.createElement("div");
            theDayName.className = "dayOfWeek";
            theDayName.textContent = myweekday[forecastDayNumber];
            console.log(myweekday[forecastDayNumber]);

            let theDayInfo = document.createElement("div");
            theDayInfo.className = "theDayInfo";


            let theTemp = document.createElement("p");
            theTemp.textContent = weatherInfo.list[i].main.temp + `\xB0`;

            let iconCode = weatherInfo.list[i].weather[0].icon;
            let iconPath = "//openweathermap.org/img/w/" + iconCode + ".png";
            let theIcon = document.createElement("img");
            theIcon.src = iconPath;

            let theDay = document.createElement("div");
            theDay.className = "dayCard";
            document.getElementById('forecast').appendChild(theDay);


            theDay.appendChild(theDayName);
            theDay.appendChild(theDayInfo);

            theDayInfo.appendChild(theTemp);
            theDayInfo.appendChild(theIcon);
        }
    }
});