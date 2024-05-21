const orderBtn = document.querySelector(".button");
const modalWnd = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".modal-window-button");

const handleOrderClick = () => {
    modalWnd.classList.add("is-open")
}

orderBtn.addEventListener("click", handleOrderClick);


const handleCloseClick = () => {
    modalWnd.classList.remove("is-open")
}

closeBtn.addEventListener("click", handleCloseClick);


const mobMenu = document.querySelector(".mob-menu")
const menuBtn = document.querySelector(".mob-menu-btn");
const closeMenuBtn = document.querySelector(".mob-menu-btn-close");


const handleMenuClick = () => {
    mobMenu.classList.add("is-open");
}

menuBtn.addEventListener("click", handleMenuClick);

const handleMenuClose = () => {
    mobMenu.classList.remove("is-open");
}

closeMenuBtn.addEventListener("click", handleMenuClose)


