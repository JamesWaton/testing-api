// const locationElement = document.querySelector(".location p");
// const notificationElement = document.querySelector(".notification");


// // CHECK IF BROWSER SUPPORTS GEOLOCATION
// if('geolocation' in navigator){
//     navigator.geolocation.getCurrentPosition(setPosition, showError);
// }else{
//     notificationElement.style.display = "block";
//     notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
// }

// // SET USER'S POSITION
// function setPosition(position){
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;
    
//     getWeather(latitude, longitude);
// }

// // SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
// function showError(error){
//     notificationElement.style.display = "block";
//     notificationElement.innerHTML = `<p> ${error.message} </p>`;
// }
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

//function getWeather(){
    // GET /{ig-user-id}/insights;

    // GET graph.facebook.com/17841405822304914/insights
    // ?metric=impressions,reach,profile_views
    // &period=day
   

    // let url = 'http://magicseaweed.com/Pipeline-Backdoor-Surf-Report/616/';
    // let response =  fetch(url);
    // .then(response => response.json())
    // .then(commits => alert(commits[0].author.login));


    
    // fetch(proxyUrl + targetUrl)
    //     .then(function(response){
    //         let data = response.json();
    //         console.log(data);
    //         return data;
          
    //     }) 

        // .then(function(data){
        //     weather.temperature.value = Math.floor(data.main.temp - KELVIN);
        //     weather.description = data.weather[0].description;
        //     weather.iconId = data.weather[0].icon;
        //     weather.city = data.name;
        //     weather.country = data.sys.country;
        // })
        //  .then(function(){
        //      displayWeather();
        // });
//}