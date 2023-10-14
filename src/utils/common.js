const topScroll = () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

};

const closeMenu = () => {
    let submenu_m = document.querySelector(".headerContainer2_m");
    if (!!submenu_m) {
        submenu_m.classList.toggle("vMOn");
        submenu_m.classList.toggle("vMOff");
    }
};
const openMenu = () => {
    let submenu_m = document.querySelector(".headerContainer2_m");
    if (!!submenu_m) {
        submenu_m.classList.toggle("vMOn");
        submenu_m.classList.toggle("vMOff");
    }
};


export default { topScroll, closeMenu, openMenu }