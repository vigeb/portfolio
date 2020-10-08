import throttle from 'lodash/throttle'

class ScrollToTop {
    constructor () {
        this.toTopButton = document.querySelector(".scroll-to-top")
        this.scrollThrottle = throttle(this.displayToTopButton, 300).bind(this)
        this.activateScrollToTop()
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