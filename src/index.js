import './style.css';

import { displayDay } from './modules/displayDay';
import { displayWeek } from './modules/displayWeek';
import { createCarousel } from './modules/weekCarousel';
import { getClosestTime } from './modules/functions';
import { cleanData } from './modules/functions';
import { initializeEventListeners } from './modules/UI';
import { sunPosition } from './modules/displayDay';

window.addEventListener('load', () => {
    document.getElementById('content').style.visibility = 'visible';
    document.getElementById('content').style.display = 'grid';

     const loader = document.getElementById('loader');
     if (loader) {
       loader.style.display = 'none';
     }
});

async function getData(location, degreeType) {
    try {
        let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=TSZSYR8TXE96SYV67WPHZUT5P&unitGroup=${degreeType}`, { mode: 'cors' })
        
        if (!response.ok) {
            console.log("Fetch error:", response.status, response.statusText);
            return null; 
        }
        
        let data = await response.json();

        return data
    } catch (err) {
        console.log("error")        
    }
}

const message = document.querySelector(".message.hidden");
const main = document.querySelector('.main')
const searchInput = document.querySelector(".search-input")

const firstLocation = 'Moscow'
let lastLocation = firstLocation


export function search(location = lastLocation, degreeType = 'metric') {
    if (location) {
        getData(location, degreeType).then(data => {
             if (!data) {
                main.classList.add('hidden');
                message.classList.remove('hidden');
                return;  
            }

            const weekData = cleanData(data); 
            displayDay(weekData, location); 
            displayWeek(weekData);
            const index = getClosestTime(weekData)
            createCarousel(0, '#week', '.prev.today', '.next.today', '.day', 7, 10, 'hidden');
            createCarousel(index, '.hours-carousel', '.prev.hour', '.next.hour', '.hour-card', 6, 0, 'block');
            sunPosition(weekData)

            if (searchInput.value.trim()) {
                lastLocation = searchInput.value.trim()
            }
            searchInput.value = ''; 


            main.classList.remove('hidden');
            message.classList.add('hidden');
        });
    } else if (location === '') {        
        main.classList.add('hidden');
        message.classList.remove('hidden');
    }
}

async function getGeoLocation() {
  const accessToken = 'a5e42750730260';
  const url = `https://ipinfo.io?token=${accessToken}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    const data = await response.json();
      search(data.city)
  } catch (error) {
    console.error('Geolocation error:', error);
  }
}

getGeoLocation();
initializeEventListeners()




