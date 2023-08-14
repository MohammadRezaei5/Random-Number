const divElement = document.getElementById("price");

setInterval(function () {
  fetch("http://localhost:3000/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      divElement.innerHTML = data.price;
    })
    .catch(function (error) {
      console.log(error);
    });
}, 1000);
