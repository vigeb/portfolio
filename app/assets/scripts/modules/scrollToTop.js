const toTopButton = document.querySelector(".scroll-to-top");

toTopButton.addEventListener("click", () => {
    scrollToTop()
})

document.body.addEventListener("scroll", () => {
    displayToTopButton()
})

const scrollToTop = () => {
    document.body.scrollTo({top: 0, behavior: "smooth"})
}

const displayToTopButton = () => {
    const scrollYPosition = document.body.scrollTop;
    
    if (scrollYPosition > 100) {
        toTopButton.style.display = "block"
    } else {
        toTopButton.style.display = "none"
    }
}