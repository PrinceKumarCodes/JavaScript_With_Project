let URL = "https://dogapi.dog/api/v2/breeds";

const dogBreeds = async () => {
  console.log("Fetching dog breeds...");
  let response = await fetch(URL);
  console.log(response);
};
