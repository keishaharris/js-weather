
let request;


//handles city location submission
function handleQuerySubmission(e){
    e.preventDefault();
 
    const city = document.getElementById('cityNameInput').value;
    request = createAPIquery(request, city)
    requestAPIData(request)
    clearForm();
    
}

//Reset Form, clear values
function clearForm(){
    queryForm.reset();
}


// Creates an API URL to be fectched
function createAPIquery(request, city='London'){
    let apiKey = '323d03772863b33abeccd25782c15ea6';
    return request = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
}


//Fetches APi 
async function requestAPIData(request){
    const response = await fetch(request);
    const dataResults = await response.json();
    
    

    return processFetchedData(dataResults);

    }

function processFetchedData(fetchedResponse){
    fetchedResponse = {
        feels_like: fetchedResponse.main.feels_like,
        humidity: fetchedResponse.main.humidity,
        temp: fetchedResponse.main.temp,
        temp_max: fetchedResponse.main.temp_max,
        temp_min: fetchedResponse.main.temp_min,
        name: fetchedResponse.name,
        country: fetchedResponse.sys.country,
        weather_description: fetchedResponse.weather[0].description,
        forecast: fetchedResponse.weather[0].main
    }
    console.log(fetchedResponse)
    return fetchedResponse
  
}



//Event listeners
const queryForm = document.getElementById('queryForm');
queryForm.addEventListener('submit', handleQuerySubmission);


// request = createAPIquery(request)
// let weatherData = requestAPIData(request);
// console.log(weatherData);




// Consoles API data to DOM 
const container = document.getElementById('container');

