
function action(event) {
    let button = event.currentTarget;
    button.classList.add("active")


}

function submit(event) {
    let wrapper = document.querySelector("#wrapper")
    wrapper.id = "next"
    wrapper.innerHTML = `
    <div id="image"></div>
    <div id="result">You selected out of 5</div>
    <h1 id="thankyou">Tank you!</h1>
    <p id="new_text">We appreciate you taking the time to give a rating. If you ever need more support, dont't hesitate to get in touch!</p>
  
    `
}