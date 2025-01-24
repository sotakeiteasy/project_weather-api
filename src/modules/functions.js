import { format } from "date-fns";

export function cleanData(data) {
    // console.log(data)
    const weekData = []
    data.days.forEach(day => {
        const dayElement = {
            temp: day.temp,
            feelsLike: day.feelslike,
            icon: day.icon,
            snow: day.snow,
            sunrise: day.sunrise,
            sunset: day.sunset,
            date: day.datetime,
            time: data.currentConditions.datetime,
            conditions: day.conditions,
            humidity: day.humidity,
            windSpeed: day.windspeed,
            windDirection: day.winddir,
            hours: day.hours,
            description: day.description,
            pressure: day.pressure
        };
        weekData.push(dayElement);
        // console.log(weekData)
    });
    return weekData;
}

export function addPlusToDegree(degree) {
    let newText
    if (degree > 0) {
        newText = `+${degree}°`
    } else {
        newText = `${degree}°`
    }
    return newText;
}

export function getClosestTime(weekData) {
    const times = weekData[0].hours.map(hour => hour.datetime)

    const timeString = weekData[0].time; 
    const today = format(new Date(), 'yyyy-MM-dd'); 
    const fullDateTime = `${today}T${timeString}`;
    const currentTime = format(new Date(fullDateTime), 'HH:mm');

    const timeToMinutes = (time) => {
        const [hours, minutes] = time.split(':').map(Number); 
        return hours * 60 + minutes; 
    };

    const closestTime = times.reduce((prev, curr) => 
        Math.abs(timeToMinutes(curr) - timeToMinutes(currentTime)) < Math.abs(timeToMinutes(prev) - timeToMinutes(currentTime)) ? curr : prev
    );

    const closestIndex = times.indexOf(closestTime);
    return closestIndex
}