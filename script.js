function getAQIStatus(aqi){
  if(aqi <= 50) return "Good";
  if(aqi <= 100) return "Moderate";
  if(aqi <= 150) return "Unhealthy for Sensitive";
  if(aqi <= 200) return "Unhealthy";
  if(aqi <= 300) return "Very Unhealthy";
  return "Hazardous";
}

async function loadData(){

  // Demo values
  const pm25 = Math.floor(Math.random()*100)+10;
  const pm10 = Math.floor(Math.random()*150)+20;

  const aqi = Math.round((pm25*0.6)+(pm10*0.4));

  document.getElementById("pm25").textContent = pm25;
  document.getElementById("pm10").textContent = pm10;

  document.getElementById("aqiValue").textContent = aqi;
  document.getElementById("aqiStatus").textContent = getAQIStatus(aqi);

  document.getElementById("updated").textContent =
    new Date().toLocaleTimeString();
}

loadData();

setInterval(loadData,30000);
