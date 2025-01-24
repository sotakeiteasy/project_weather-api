import { format } from "date-fns"
import { addPlusToDegree } from "./functions"

import overcastIcon from '../icons/negative.svg';   
import clearDayIcon from '../icons/clear-day.svg';   
// import clearNightIcon from '../icons/clear-night.svg';   
import moderateRainIcon from '../icons/moderate-rain.svg';   
import moderateSnowIcon from '../icons/moderate-snow.svg';   
import cloudyDayIcon from '../icons/cloudy-day.svg';   
// import cloudyNightIcon from '../icons/cloudy-night.svg';   
// import noDataIcon from '../icons/no-data.svg';  

export function displayWeek(weekData) {
    const weekWeatherContainer = document.querySelector('#week')
    weekWeatherContainer.innerHTML = ''
    for (let i = 0; i < weekData.length; i++){
        const day = document.createElement('div')
        day.classList.add('day')

        // header
        const header = document.createElement('header');
        header.classList.add('day-header');
        if (i === 0) {
            header.textContent = 'Today';
        } else {
            header.textContent = format(new Date(weekData[i].date), "EE");        
        }
        day.appendChild(header);
        
        // picture
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('day-imageContainer');

        // date
        const dateParagraph = document.createElement('p');
        dateParagraph.classList.add('day-date');
        dateParagraph.textContent = format(new Date(weekData[i].date), 'dd MMM')
        day.appendChild(dateParagraph);

        // icons
        const todayIcon = document.createElement('div')
        todayIcon.classList.add('.today-icon')
        day.appendChild(todayIcon);

        if (weekData[i].conditions.includes('Clear')) {
            todayIcon.innerHTML = `<img src="${clearDayIcon}" alt="Icon">`
        } else if (weekData[i].conditions.includes('Rain')) {
            todayIcon.innerHTML = `<img src="${moderateRainIcon}" alt="Icon">`
        } else if (weekData[i].conditions.includes('Overcast')) {
            todayIcon.innerHTML = `<img src="${overcastIcon}" alt="Icon">`
        } else if (weekData[i].conditions.includes('Snow')) {
            todayIcon.innerHTML = `<img src="${moderateSnowIcon}" alt="Icon">`
        } else if (weekData[i].conditions.includes('cloudy')) {
            todayIcon.innerHTML = `<img src="${cloudyDayIcon}" alt="Icon">`
        }

        // temp
        const temperatureParagraph = document.createElement('p');
        temperatureParagraph.innerHTML = `<span class="day-temperature">${addPlusToDegree(weekData[i].temp)}</span>`;
        day.appendChild(temperatureParagraph);

        // conditions
        const conditionsParagraph = document.createElement('p');
        conditionsParagraph.innerHTML = `<span class="day-conditions">${weekData[i].conditions}</span>`;
        day.appendChild(conditionsParagraph);
        weekWeatherContainer.appendChild(day)
    }
}