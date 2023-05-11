"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const joke = document.querySelector("#joke");
  const btn = document.querySelector("#btn");

  async function getJoke() {
    try {
      joke.classList.remove("fade");
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
      );
      const data = await response.json();
      joke.textContent = `${data.joke}`;
      joke.classList.toggle("fade");
      return data;
    } catch (e) {
      console.log("Error", e);
    }
  }

  btn.addEventListener("click", getJoke);
});
