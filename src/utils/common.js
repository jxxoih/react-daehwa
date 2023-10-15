const topScroll = () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

};

const closeMenu = () => {
    let submenu_m = document.querySelector(".headerContainer2_m");
    if (!!submenu_m) {
        submenu_m.classList.remove("vMOn");
        submenu_m.classList.add("vMOff");
    }
};
const openMenu = () => {
    let submenu_m = document.querySelector(".headerContainer2_m");
    if (!!submenu_m) {
        submenu_m.classList.add("vMOn");
        submenu_m.classList.remove("vMOff");
    }
};


export default { topScroll, closeMenu, openMenu }