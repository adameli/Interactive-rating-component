
function action(event) {
    for (let x of rating_buttons) {
        x.classList.remove("active")
    }
    let button = event.currentTarget;
    button.classList.add("active")

    rating_number = button.textContent
    console.log(rating_number);

}

function submit(event) {
    let wrapper = document.querySelector("#wrapper")
    wrapper.id = "next"
    wrapper.innerHTML = `
    <div id="image"></div>
    <div id="result">You selected ${rating_number} out of 5</div>
    <h1 id="thankyou">Tank you!</h1>
    <p id="new_text">We appreciate you taking the time to give a rating. If you ever need more support, dont't hesitate to get in touch!</p>
  
    `
}