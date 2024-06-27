var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')



apik = "b61663f21d6912e0afac833400e47363"
function convertion(val)
{
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function()
{
    fetch( 'https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
{
    var nameval = data['name']
    var descrip = data['weather']['0']['description']
    var temprature = data['main']['temp']
    var windspeed = data['wind']['speed']

    city.innerHTML=`Wether of <span>${nameval}<span>`
    temp.innerHTML=`Temprature:   <span>${ convertion(temprature)} °C</span>`
    description.innerHTML=`Sky Conditions:   <span>${descrip}<span>`
    wind.innerHTML=`Wind Speed:   <span>${windspeed} km/hr <span>`

})

.catch(err => alert('You Entered Wrong City Name'))

})