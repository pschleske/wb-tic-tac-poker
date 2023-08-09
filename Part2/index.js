console.log("Hello")

const idInput = document.querySelector("#id-input")
const styleInput = document.querySelector("#style-input")
// console.log(idInput)
// console.log(styleInput)
function setCard() {
    const card = document.querySelector(`#${idInput.value}`)
    console.log(card)
    card.style.color = styleInput.value
}




