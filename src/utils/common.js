const topScroll = () => {
    scrollTo(document.documentElement, 0, 500);
};

function scrollTo(el, to, duration) {
    let start = el.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    let animateScroll = function () {
        currentTime += increment;
        let val = Math.easeInOutQuad(currentTime, start, change, duration);
        el.scrollTop = val;
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };

    animateScroll();
}

export default { topScroll }