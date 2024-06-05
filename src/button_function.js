const buttonFunction = () => {
    const homeBtn = document.querySelector(".home-btn")
    const menuBtn = document.querySelector(".menu-btn")
    const contactBtn = document.querySelector(".contact-btn")

    const heading = document.querySelector(".heading")
    const home = document.querySelector(".home")
    const menu = document.querySelector(".menu")
    const contact = document.querySelector(".contact")

    homeBtn.addEventListener("click", () => {
        heading.classList.add("hide")
        home.classList.add("view")
        menu.classList.remove("view")
        contact.classList.remove("view")

        homeBtn.classList.add("clicked")
        menuBtn.classList.remove("clicked")
        contactBtn.classList.remove("clicked")
    })

    menuBtn.addEventListener("click", () => {
        heading.classList.add("hide")
        menu.classList.add("view")
        home.classList.remove("view")
        contact.classList.remove("view")

        homeBtn.classList.remove("clicked")
        menuBtn.classList.add("clicked")
        contactBtn.classList.remove("clicked")
    })

    contactBtn.addEventListener("click", () => {
        heading.classList.add("hide")
        contact.classList.add("view")
        home.classList.remove("view")
        menu.classList.remove("view")

        homeBtn.classList.remove("clicked")
        menuBtn.classList.remove("clicked")
        contactBtn.classList.add("clicked")
    })
}

export default buttonFunction