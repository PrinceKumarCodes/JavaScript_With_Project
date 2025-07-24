//---------nested callback that's why it's called callback hell------------------

// function getData(getID, getNextData) {
//   setTimeout(() => {
//     console.log("Data :-", getID);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   getData(2);
// });

function getData(getId, getNextData) {
  setTimeout(() => {
    console.log("Data :-", getId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(1, () => {
  //it's called callback Hell
  console.log("getting data2....");
  getData(2, () => {
    console.log("getting data3...");
    getData(3, () => {
      console.log("getting data4....");
      getData(4, () => {
        console.log("getting data5......");
        getData(5);
      });
    });
  });
});
