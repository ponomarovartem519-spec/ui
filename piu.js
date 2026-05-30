let title = document.querySelector("h1");
title.textContent = "Привіт, я Артем Пономарьов";
let links = document.querySelectorAll("a");
links[1].textContent = "Discord: jo07135";
links[1].href = "#";
let text = document.createElement("p");
text.textContent = "Це моя сторінка ._.";
document.body.appendChild(text);
const nameInput = document.querySelector("#name-input");

const hero = document.querySelector("body");

nameInput.addEventListener("input", (event) => {

    const nameText = nameInput.value.toLowerCase();

    console.log(nameText); 
                                                                
    if(nameText === "fallout"){
        hero.classList.add("hero-block-sviatoslav");
    } else {
        hero.classList.remove("hero-block-sviatoslav");
    }
});