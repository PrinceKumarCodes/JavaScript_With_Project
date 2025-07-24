const URL = "https://api.thecatapi.com/v1/images/search?limit=10";
const firstImage1 = document.querySelector("#img1");
const firstImage2 = document.querySelector("#img2");
const firstImage3 = document.querySelector("#img3");
const firstImage4 = document.querySelector("#img4");
const firstImage5 = document.querySelector("#img5");
const firstImage6 = document.querySelector("#img6");
const firstImage7 = document.querySelector("#img7");
const firstImage8 = document.querySelector("#img8");
const firstImage9 = document.querySelector("#img9");
const firstImage10 = document.querySelector("#img10");
const firstImage11 = document.querySelector("#img11");
const firstImage12 = document.querySelector("#img12");

const button = document.querySelector("#btn");
const randomFact = Math.floor(Math.random() * 10);

// const GetFacts = async () => {
//   console.log("Fetching data...");
//   let promise = await fetch(URL);
//   console.log(promise); //json format
//   let data = await promise.json(); //json method make redable fromat data
//   console.log(data);
//   firstImage.src = data[randomFact].url;
// };

function GetFacts() {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      firstImage1.src = data[0].url;
      firstImage2.src = data[1].url;
      firstImage3.src = data[2].url;
      firstImage4.src = data[3].url;
      firstImage5.src = data[4].url;
      firstImage6.src = data[5].url;
      firstImage7.src = data[6].url;
      firstImage8.src = data[7].url;
      firstImage9.src = data[8].url;
      firstImage10.src = data[9].url;
      firstImage11.src = data[0].url;
      firstImage12.src = data[7].url;
    });
}

button.addEventListener("click", GetFacts);
