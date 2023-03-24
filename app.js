let button = document.getElementById("submitSearch");
let input = document.getElementById("searchWord");
let img = document.querySelector("img");
let p = document.createElement("p");
p.id = "error";
button.addEventListener("click", showGiphs);

const apiKey = "KYSii2fNlMuZfOPob8BGvdRVmXlJOcYf";
function showGiphs() {
  console.log(input.value);
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${input.value}`
  )
    .then((response) => {
      return response.json();
    })
    .then((obj) => {
      img.src = `${obj.data.images.original.url}`;
      input.value = "";
      p.textContent = "";
    })
    .catch((err) => {
      console.log(err);
      p.textContent = "Could not find a Gif, please try again.";
      img.src = "";
      document.getElementById("imageContainer").appendChild(p);
    });
}

// const apiKey1 = "43c9c8c543bfb593f22056af4732861f";
// const oneCall = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${countryCode}&appid=${apiKey}`;
// function showForcast() {
//   fetch()
//     .then((response) => {})
//     .then((obj) => {})
//     .catch((err) => {});
// }
// showForcast();
