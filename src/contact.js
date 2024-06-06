const contact = () => {

    const content = document.querySelector(".content")

    const contactElement = document.createElement("div")
    contactElement.classList.add("contact")
    contactElement.classList.add("hide")
    contactElement.innerHTML = `<div class="contact-me">contact me :</div><div class="name">jeet debnath</div><div class="address">navi mumbai, india</div><div class="contact-number">+91 00000000</div>`

    content.appendChild(contactElement)
}

export default contact