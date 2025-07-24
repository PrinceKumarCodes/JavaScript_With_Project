// function asyncFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data1");
//       // resolve("success");
//     }, 4000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data2");
//       // resolve("success");
//     }, 4000);
//   });
// }
//---------Both way we can call function--------------

// console.log("Fetching data1......");
// asyncFunc().then((res) => {
//   console.log(res);
//   console.log("Fetching data2......");
//   asyncFunc2().then(() => {
//     console.log(res);
//   });
// });

// console.log("Fetching data1.....");
// let p1 = asyncFunc();
// p1.then((res) => {
//   console.log(res);
//   console.log("Fetching data2....");
//   let p2 = asyncFunc2();
//   p2.then((res) => {
//     console.log(res);
//   });
// });

//----------------------------------------------

// console.log("Fetching data2....");
// let p2 = asyncFunc2();
// p2.then((res) => {
//   console.log(res);
// });

//-----------------callback hell-------------------
// function getData(getID, getNextData) {
//   setTimeout(() => {
//     console.log("Data :-", getID);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// //Callback Hell
// getData(1, () => {
//   console.log("Getting data2....");
//   getData(2, () => {
//     console.log("Getting data3.....");
//     getData(3, () => {
//       console.log("Getting data4....");
//       getData(2);
//     });
//   });
// });

//---------------------------------------------
function getData(getId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data :", getId);
      resolve("success");
    }, 3000);
  });
}

//--------------------Promise chain--------------------

// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then((res) => {
//     console.log(res);
//   });
// });

// it is best way to handle promise.
//it is called promise chain
getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    console.log(res);
  });
