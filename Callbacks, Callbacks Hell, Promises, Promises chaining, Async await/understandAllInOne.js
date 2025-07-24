// async-await >> promise chain >> callback Hell

function getData(getId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data :", getId);
      resolve("success");
    }, 2000);
  });
}

//---------------------async await------------------------
async function getAllData() {
  console.log("Getting data1.....");
  await getData(1);
  console.log("Getting data2.....");
  await getData(2);
  console.log("Getting data3.....");
  await getData(3);
  console.log("Getting data4.....");
  await getData(4);
  console.log("Getting data5.......");
  await getData(5);
}
getAllData(); // call async function then it will be execute.

//------------IIFE(Immediately Invoked Function Expression)-----------
//By using IIFE function ,it will execute automatically , you will not have to call one time
(async function () {
  console.log("Getting data1.....");
  await getData(1);
  console.log("Getting data2.....");
  await getData(2);
  console.log("Getting data3.....");
  await getData(3);
  console.log("Getting data4.....");
  await getData(4);
  console.log("Getting data5.......");
  await getData(5);
})();

//----------------Promise chain----------------
console.log("Getting data1......");
getData(1)
  .then((res) => {
    console.log("Getting data2......");
    return getData(2);
  })
  .then((res) => {
    console.log("Getting data3......");
    return getData(3);
  })
  .then((res) => {
    console.log("Getting data4......");
    return getData(4);
  })
  .then((res) => {
    console.log("Getting data5......");
    return getData(5);
  });

//----------------Callback Hell---------------------
getData(1, () => {
  console.log("Getting data2......");
  getData(2, () => {
    console.log("Getting data3......");
    getData(3, () => {
      console.log("Getting data4......");
      getData(4, () => {
        console.log("Getting data5......");
        getData(5);
      });
    });
  });
});
