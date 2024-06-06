import logoImg from './assets/logo.svg'

const logo = () => {
    const head = document.getElementsByTagName("head")[0];
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = logoImg;

    head.appendChild(link);
}

export default logo