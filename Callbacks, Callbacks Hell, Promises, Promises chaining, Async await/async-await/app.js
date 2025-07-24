//---------------------first practice---------------------
/*
function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve("4333");
    }, 2000);
  });
}

async function getWeatherData() {
  await api(); //1st execute then next execute
  await api();
}
getWeatherData();
*/

//-------------------Second practice-------------------
function getData(getId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data :", getId);
      resolve("success");
    }, 2000);
  });
}

//async await
async function getAllData() {
  await getData(1);
  await getData(2);
  await getData(3);
  await getData(4);
  await getData(5);
  await getData(6);
}
getAllData();
