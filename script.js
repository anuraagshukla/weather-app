function callApi(){
let city = document.getElementById('city').value;
let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=db3042e83f7a5a2f0517778ba4a3344b`


    fetch(url)
      .then(response => response.json())
      
      .then(data => showData(data))
      .catch(error => console.log(error));
    
    }

 function showData(data){
    console.log(data);
    let ico_value = data.weather[0].icon;
   let iconValue = `<img src = "https://openweathermap.org/img/wn/${ico_value}@2x.png" alt="icon" >`
document.getElementById('displayIcon').innerHTML = iconValue;
    

    // document.getElementById('image').innerHTML = ico;

    document.getElementById('maxTemp').innerHTML = data.main.temp_max;
    document.getElementById('minTemp').innerHTML = data.main.temp_min;
    document.getElementById('humidity').innerHTML = data.main.humidity;


 }


document.getElementById('getData').addEventListener('click',callApi);
