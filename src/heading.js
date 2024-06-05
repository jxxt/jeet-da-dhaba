const heading = () => {
    const content = document.querySelector(".content")

    const headingElement = document.createElement("div")
    headingElement.classList.add("heading")
    headingElement.innerHTML= `<span>jeet da dhaba</span>`

    content.appendChild(headingElement)
}

export default heading