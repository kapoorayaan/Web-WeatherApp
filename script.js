const apikey="bb53427bdcb4f8377fb6a4dde0a0c6fc";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const ico=document.querySelector(".ic")
async function check(c){
	const resp=await fetch(apiurl + c + `&appid=${apikey}`);
	if(resp.status==404){
		document.querySelector(".error").style.display="block";
		document.querySelector(".w").style.display="none";
	}
	var data=await resp.json()
	document.querySelector(".city").innerHTML=data.name; 
	document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C"; 
	document.querySelector(".humidity").innerHTML=data.main.humidity +"%"; 
	document.querySelector(".wind").innerHTML=data.wind.speed+"km/h"; 

	if(data.weather[0].main =="Clouds"){
		ico.src ="images/clouds.png";
	}
	else if(data.weather[0].main =="Rain"){
		ico.src ="images/rain.png";
	}
	else if(data.weather[0].main =="Clear"){
		ico.src ="images/clear.png";
	}
	else if(data.weather[0].main =="Drizzle"){
		ico.src ="images/drizzle.png";
	}
	else if(data.weather[0].main =="Mist"){
		ico.src ="images/mist.png";
	}
	document.querySelector(".w").style.display="block";
	document.querySelector(".error").style.display="none";
}
searchbtn.addEventListener("click", ()=>{
	check(searchbox.value);
})
 
