const getWeather = async () => {
    const apiKey = "ENTER API KEY HERE";
    const city = document.getElementById('city').value;
    const mainRequest = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    //check if there is a city entered
    if (!city) {
        alert('Something went wrong, please enter a city');
        return;
    }

    //send api request
    try {
        const response = await fetch(mainRequest);
        if (response.ok) {
            returnValue = await response.json();
            temperature.innerHTML = `<p>Temperature: ${returnValue.main.temp} °F</p>`;
        }
    } catch (error) {
        alert(error);
    }
}