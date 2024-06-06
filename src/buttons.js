const button = () => {
    const buttonClasses = ['home-btn', 'menu-btn', 'contact-btn'];

    document.querySelectorAll('header nav button').forEach((button, index) => {
        if (index < buttonClasses.length) {
            button.classList.add(buttonClasses[index]);
        }
    });

    const homeBtn = document.querySelector(".home-btn")
    const menuBtn = document.querySelector(".menu-btn")
    const contactBtn = document.querySelector(".contact-btn")

    homeBtn.innerHTML = "home"
    menuBtn.innerHTML = "menu"
    contactBtn.innerHTML = "contact"
}

export default button