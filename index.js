let title = document.querySelector('.title');

let card = document.querySelector('.card');

let main = document.querySelector('.main');

let description = document.querySelector('.weather-info');

let loader = document.querySelector('.spinner');


let error_box = document.querySelector('.error-box');

document.querySelector('.btn').addEventListener('click',()=>{
    console.log("search started");
    description.style.display= "none";
    loader.style.display="block";

    fetchdata(title.value);

    description.style.display= "flex";
    loader.style.display="none";
    
    title.value=null;
});


let apikey = "7a02ed8b99a2c0e2abddd6f32163d005";
let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function fetchdata(city){
    try{
        const data = await fetch(apiurl + `&q=${city}` + `&appid=${apikey}`);
        var output = await data.json();
        console.log(output);
    
        document.querySelector('.temp').innerHTML = Math.round(output.main.temp) + "°c";
        document.querySelector('.wind-speed').innerHTML = output.wind.speed + ' Km/hr';
        document.querySelector('.humidity').innerHTML = output.main.humidity +'%';
        document.querySelector('.city-name').innerHTML = output.name;

        let image = document.querySelector('.img img');

        if(output.weather[0].main == "Clear"){
            image.src="clear.png";
        }

        else if(output.weather[0].main == "Clouds"){
            image.src="clouds.png";
        }

        else if(output.weather[0].main == "Rain"){
            image.src="rain.png";
        }

        else if(output.weather[0].main == "Mist"){
            image.src="mist.png";
        }

        else if(output.weather[0].main == "Snow"){
            image.src="snow.png";
        }

        else{
            image.src="drizzle.png";
        }

    }


    catch(error){
        // alert("City not found");
        console.log(error)
        card.style.display="none";
        error_box.style.display= "flex";
    }


     document.querySelector('.error-box button').addEventListener("click",()=>{
        error_box.style.display= "none";
        main.style.display="flex";
    })
   
}

let city_input = document.querySelector('.city-input');

document.querySelector('.main-btn').addEventListener('click',()=>{
    card.style.display="flex";
    console.log("search started");
    fetchdata(city_input.value);
    main.style.display= "none";
    city_input.value=null;
});


 
