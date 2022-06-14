function fetchweather(){
    var request = new XMLHttpRequest();
    var city = document.getElementById("cityname").value;
    //var resquest = new XMLHttpRequest();
    var apikey ='4f99bcaf65533caa6b7c782a33e71412'
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&apikey=${apikey}&units=metric`;
    request.open('GET',url,true);
    request.onload=function(){
        var result = JSON.parse(this.response);
        console.log(result);
        document.getElementById("temp").value = result.main.temp;
    }
    request.send();
    console.log("Fetching...");
}