//type in console then enter then write promises the enter

//---------------------------------------------
// let promises = new Promise((resolve, reject) => {
//   console.log("I am a Promise.");
//   resolve(123);
//   reject("some error"); // it will print some error
// });

//---------------------------------------------
function getData(getId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   console.log("data :", getId);
      //   resolve("success");
      reject("some error occured");
      if (getNextData) {
        getNextData();
      }
    }, 2000);
  });
}

getData(143234);
