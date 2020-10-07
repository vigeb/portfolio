class ScrollToTop {
    constructor () {
        this.toTopButton = document.querySelector(".scroll-to-top")
        this.scrollDown()
        this.activateScrollToTop()
    }

    scrollDown() {
        window.addEventListener('scroll', () => {
            this.displayToTopButton()
        })
    }

    displayToTopButton() {
        if (window.scrollY > 120) {
            this.toTopButton.style.display = "block"
        } else {
            this.toTopButton.style.display = "none"
        }
    }

    activateScrollToTop() {
        this.toTopButton.addEventListener('click', this.scrollToTop)
    }

    scrollToTop() {
        window.scrollTo(0, 0)
    }
}

export default ScrollToTop