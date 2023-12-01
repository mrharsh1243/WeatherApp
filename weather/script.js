const container = document.querySelector('.container');
const search = document.querySelector('.container');
const weatherBox = document.querySelector('.container');
const weatherDetails = document.querySelector('.container');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {
    const APIKey = '5eae970803790f1b06ae5e09c14fa4df';
    const city = document.querySelector('.search-box input').value;

    if (city === '') {
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {


            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;
                case 'Rain':
                    image.src = 'images/rain.png';
                    break;
                case 'Snow':
                    image.src = 'images/snow.png';
                    break;
                case 'Clouds':
                    image.src = 'images/cloud.png';
                    break;
                case 'Mist':
                    image.src = 'images/mist.png';
                    break;
                case 'Haze':
                    image.src = 'images/mist.png';
                    break;
                case 'Smoke':
                    image.src = 'images/mist.png';
                    break;
                default:
                    image.src = 'images/clouds.png';
            }

            // Update other elements with data from the API
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});

// if (json.cod == '404') {
//     container.style.height = '400px';
//     weatherBox.classList.remove(' active');
//     weatherDetails.classList.remove('active');
//     error404.classList.add('active');
//     return;
// }
// container.style.height = '555px';
// weatherBox.classList.add(' active');
// weatherDetails.classList.add('active');
// error404.classList.remove('active');