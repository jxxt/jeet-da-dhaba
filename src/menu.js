import oneImg from './1.jpg'
import twoImg from './2.jpg'
import threeImg from './3.jpg'
import fourImg from './4.jpg'

const menu = () => {
    const content = document.querySelector(".content")

    const menuElement = document.createElement("div")
    menuElement.classList.add("menu")
    menuElement.classList.add("hide")
    menuElement.innerHTML = `<div class="left layout"><span>Butter Chicken with Naan</span><img src="${oneImg}" alt=""></div><div class="right layout"><img src="${twoImg}" alt=""><span>Aloo Paratha</span></div><div class="left layout"><span>Matar Paneer with Roti</span><img src="${threeImg}" alt=""></div><div class="right layout"><img src="${fourImg}" alt=""><span>Chole Kulche</span></div>`

    content.appendChild(menuElement)
}

export default menu