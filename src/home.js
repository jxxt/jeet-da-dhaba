import homeImg from './home.jpeg'

const home = () => {

    const content = document.querySelector(".content")

    const homeElement = document.createElement("div")
    homeElement.classList.add("home")
    homeElement.classList.add("hide")
    homeElement.innerHTML = `<h1>!! welcome to jeet's imaginary metaverse dhaba !!</h1><div class="home-img"><img src="${homeImg}" alt=""></div>`

    content.appendChild(homeElement)
}

export default home