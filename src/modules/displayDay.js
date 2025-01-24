import { format } from "date-fns";
import { addPlusToDegree } from "./functions"

import clearSkyDayImage from '../pictures/clear-day.jpg';
import overcastImage from '../pictures/overcast.jpg';
import rainImage from '../pictures/rain.jpg';
import snowImage from '../pictures/snow.jpg';
import cloudyImage from '../pictures/cloudy.jpg';

import clearSkyNightImage from '../pictures/clear-night.jpg';
import overcastNightImage from '../pictures/overcast-night.jpg';
import cloudyNightImage from '../pictures/cloudy-night.jpg';

import overcastIcon from '../icons/negative.svg';   
import clearDayIcon from '../icons/clear-day.svg';   
import clearNightIcon from '../icons/clear-night.svg';   
import moderateRainIcon from '../icons/moderate-rain.svg';   
import moderateSnowIcon from '../icons/moderate-snow.svg';   

import cloudyDayIcon from '../icons/cloudy-day.svg';   
import cloudyNightIcon from '../icons/cloudy-night.svg';   

import noDataIcon from '../icons/no-data.svg';   


export function sunPosition(weekData) {
    const timeString = weekData[0].time; 
    const timeNow = timeString.slice(0, -3);
    
    let sunsetTime = weekData[0].sunset.slice(0, -3);
    let sunsetHours = sunsetTime.slice(0, -3)
    let sunsetMinutes = sunsetTime.slice(3, 5)
    let sunset = sunsetHours * 60 + parseInt(sunsetMinutes)

    let sunriseTime = weekData[0].sunrise.slice(0, -3);
    let sunriseHours = sunriseTime.slice(0, -3)
    let sunriseMinutes = sunriseTime.slice(3, 5)
    let sunrise = sunriseHours * 60 + parseInt(sunriseMinutes)

    // let time = format(new Date(fullDateTime), 'HH:mm'); 
    let time = timeString.slice(0, -3);

    let timeHours = time.slice(0, -3)
    let timeMinutes = time.slice(3, 5)
    time = timeHours * 60 + parseInt(timeMinutes) - sunrise

    let sunsetSunrise = (sunset - sunrise)
    let oneDegreeInMinutes = sunsetSunrise/180
    let sunPos = time/oneDegreeInMinutes 

    const dot = document.querySelector('.dot');

    const arcWidth = 200; 
    const arcHeight = 100; 

    function updateDotOnArc(degree) {
        const radian = (degree * Math.PI) / 180;

        // const x = ((arcWidth - 3 )/ 2) * (1 - Math.cos(radian));
        const x = (arcWidth / 2) - ((arcWidth )/ 2) * Math.cos(radian);
        const y = (arcHeight) - (arcHeight * Math.sin(radian));

        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
    }
    
    // updateDotOnArc(sunPos); 

    let degree = 0;

    function animateDot() {
        updateDotOnArc(degree);

        if (degree < sunPos && degree < 180) { 
            dot.style.display = 'inline'
            degree++;
            requestAnimationFrame(animateDot);
        } else if (degree >= 180) {
            dot.style.display = 'none'
        }
    }

    animateDot(); 

    
    const sunsetEl = document.querySelector('.sunset-el')
    const sunriseEl = document.querySelector('.sunrise-el')

    sunriseEl.textContent = sunriseTime
    sunsetEl.textContent = sunsetTime


    const dayDescription = document.querySelector('.dayDescription')
    dayDescription.textContent = weekData[0].description
}

export function displayDay(weekData, location) {

    

    const todayContainer = document.querySelector('#today');

    // header
    const header = document.querySelector('#today-header');
    header.innerHTML = `Weather in <span id="city-name">${location }</span>`
    
    // time
    const time = document.querySelector('#today-time');
    const timeString = weekData[0].time; 
    const timeNow = timeString.slice(0, -3);
    time.textContent = `State by ${timeNow}`

    // temp
    const todayTemp = document.querySelector('#today-temperature');
    todayTemp.textContent = addPlusToDegree(weekData[0].temp)

    // icon
    const  todayIcon = document.querySelector('.today-icon')

    // another
    const conditionsParagraph = document.querySelector('#today-conditions');
    conditionsParagraph.textContent = `${weekData[0].conditions}`

    const feelsLikeParagraph = document.querySelector('#today-feelsLike .value');
    feelsLikeParagraph.textContent = addPlusToDegree(weekData[0].feelsLike)

    const todayWind = document.querySelector('#today-wind');
    todayWind.textContent = `${weekData[0].windSpeed} m/s`

    const todayHumidity = document.querySelector('#today-humidity');
    todayHumidity.innerHTML = `${weekData[0].humidity}%`

    const todayPressure = document.querySelector('#today-pressure');
    todayPressure.innerHTML = `${weekData[0].pressure} hPa`

    // image and icon
    const currentHour = parseInt(timeNow.split(':')[0], 10);
    let isNight = false;
    if (currentHour >= 18 || currentHour < 6) {
        isNight = true;
    }

    if (isNight) {
        if (weekData[0].conditions.includes('Clear')) {
            setBeforeBackgroundImage('#today', clearSkyNightImage)
            todayIcon.innerHTML = `<img src="${clearNightIcon}" alt="Icon">`
        } else if (weekData[0].conditions.includes('Rain')) {
            setBeforeBackgroundImage('#today', rainImage)
            todayIcon.innerHTML = `<img src="${moderateRainIcon}" alt="Icon">`
        } else if (weekData[0].conditions.includes('Overcast')) {
            setBeforeBackgroundImage('#today', overcastNightImage)
            todayIcon.innerHTML = `<img src="${overcastIcon}" alt="Icon">`
        } else if (weekData[0].conditions.includes('Snow')) {
            setBeforeBackgroundImage('#today', snowImage)
            todayIcon.innerHTML = `<img src="${moderateSnowIcon}" alt="Icon">`
        } else if (weekData[0].conditions.includes('cloudy')) {
            setBeforeBackgroundImage('#today', cloudyNightImage)
            todayIcon.innerHTML = `<img src="${cloudyNightIcon}" alt="Icon">`
            
        }
    } else if (!isNight) {
        if (weekData[0].conditions.includes('Clear')) {
            setBeforeBackgroundImage('#today', clearSkyDayImage)
            todayIcon.innerHTML = `<img src="${clearDayIcon}" alt="Icon">`
        } else if (weekData[0].conditions.includes('Rain')) {
            setBeforeBackgroundImage('#today', rainImage)
            todayIcon.innerHTML = `<img src="${moderateRainIcon}" alt="Icon">`
        } else if (weekData[0].conditions.includes('Overcast')) {
            setBeforeBackgroundImage('#today', overcastImage)
            todayIcon.innerHTML = `<img src="${overcastIcon}" alt="Icon">`
        } else if (weekData[0].conditions.includes('Snow')) {
            setBeforeBackgroundImage('#today', snowImage)
            todayIcon.innerHTML = `<img src="${moderateSnowIcon}" alt="Icon">`
        } else if (weekData[0].conditions.includes('cloudy')) {
            setBeforeBackgroundImage('#today', cloudyImage)
            todayIcon.innerHTML = `<img src="${cloudyDayIcon}" alt="Icon">`
        }
    } else {
        todayIcon.innerHTML = `<img src="${noDataIcon}" alt="Icon">`
    }
    

    const oldHoursContainer = todayContainer.querySelector('.hours-panel');
    if (oldHoursContainer) {
        oldHoursContainer.remove();
    }

    // hours carousel    
    const hoursPanel = document.createElement('div')
    hoursPanel.classList.add('hours-panel')

    const hoursContainer = document.createElement('div')
    hoursContainer.classList.add('hours-container')
    
    const hoursDiv = document.createElement('div')
    hoursDiv.classList.add('hours-carousel')

    const nextHourButton = document.createElement('button');
    nextHourButton.classList.add('next', 'hour');
    nextHourButton.innerHTML = `<img src="chevron-right.svg" alt="picture for pressure"></img>`

    const prevHourButton = document.createElement('button');
    prevHourButton.classList.add('prev', 'hour');
    prevHourButton.innerHTML = `<img src="chevron-left.svg" alt="picture for pressure"></img>`

    hoursPanel.append(nextHourButton, prevHourButton);
    const twodays = weekData[0].hours.concat(weekData[1].hours)

    twodays.forEach((hour, index) => {
        const hourDiv = document.createElement('div');
        hourDiv.classList.add('hour-card');

        // time
        const timeString = hour.datetime; 
        const hourTime = format(new Date(), 'yyyy-MM-dd'); 
        const fullDateTime = `${hourTime}T${timeString}`;
        
        const timeParagraph = document.createElement('p');
        timeParagraph.classList.add('hour-time');
        
        if (index < 24 || (index > 24 && index !== 24)) {
            timeParagraph.textContent = format(new Date(fullDateTime), 'HH:mm');

        } if (index === 24) {
            timeParagraph.textContent = format(new Date(fullDateTime), 'EE HH:mm');
        } 

        hourDiv.appendChild(timeParagraph);

        // temp
        const temperatureParagraph = document.createElement('p');
        temperatureParagraph.innerHTML = `<span class="hour-temperature">${addPlusToDegree(hour.temp)}</span>`;
        hourDiv.appendChild(temperatureParagraph);


        hoursDiv.appendChild(hourDiv)
    })
    
    hoursContainer.appendChild(hoursDiv)
    hoursPanel.appendChild(hoursContainer)
    todayContainer.appendChild(hoursPanel)
}

function setBeforeBackgroundImage(containerSelector, imageUrl) {
        let styleTag = document.getElementById("dynamic-before-style");

        if (!styleTag) {
        styleTag = document.createElement("style");
        styleTag.id = "dynamic-before-style";
        document.head.appendChild(styleTag);
        }
        if (styleTag) {
            styleTag.innerHTML = '';
        }

        styleTag.textContent = `body #today::before { background-image: url("${imageUrl}"); };`;
    }