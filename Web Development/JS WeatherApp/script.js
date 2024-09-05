const searchInput = document.querySelector(".search-input");

const API_KEY = "8ab4f147fa7e4f49b93170022240309";

const getWeatherDetails = async (cityName)=>{
    const API_URL = 'http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}';

    try{
        const response = await fetch(API_URL);
        const data = await response.json();

        console.log(data)

    } catch(error){

    }
}


// Handling user input in the search box
searchInput.addEventListener("keyup", (e) => {
    const cityName = searchInput.value.trim();

    if(e.key == "Enter" && cityName){
        console.log(cityName);
        getWeatherDetails(cityName);
    }
});