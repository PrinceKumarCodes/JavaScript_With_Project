let getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a Promise");
    // resolve("success");
    reject("some error occured");
  });
};

let promise = getPromise();
promise.then((res) => {
  console.log("promise fulfilled ", res);
});

promise.catch((err) => {
  console.log("rejected promise", err);
});
