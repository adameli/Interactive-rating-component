"use strict"

let rating_buttons = document.querySelectorAll("#numbers > div")
for (let number of rating_buttons) {
    number.addEventListener("click", action)
}

let submit_button = document.querySelector("button")
submit_button.addEventListener("click", submit)

let rating_number = 0;