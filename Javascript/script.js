

var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var names = document.querySelector('.names');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&APPID=881ae117be4c62c83309d37cca8427b1')
  .then(response => response.json())
  .then(data => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
  
    names.innerHTML = nameValue;
    temp.innerHTML = (tempValue - 273).toFixed(2) + " Deg Celcius";
    desc.innerHTML = descValue;
    console.log(descValue);
  })

  .catch(err => alert("Wrong City Name! "))
})
