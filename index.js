"use strict";

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    let userInput = $("#dog-num").val();
    getDogImage(userInput);
  });
}

$(function () {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});

function getDogImage(userNum) {
  if (userNum < 1 || userNum > 50) {
    return alert("Please input a number from 1 to 50.");
  } else {
    fetch(`https://dog.ceo/api/breeds/image/random/${userNum}`)
      .then((response) => response.json())
      .then((responseJson) => displayImages(responseJson))
      .catch((error) =>
        alert("Something went wrong. Try again in a few minutes.")
      );
  }
}

function displayImages(responseJson) {
  console.log(responseJson);

  responseJson.message.forEach((retrievedImg) => {
    $(".image-results").append(`<img src="${retrievedImg}" class="images">`);
  });

  $(".image-results").removeClass("hidden");
}
