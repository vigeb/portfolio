import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

export default class RevealOnScroll {
    constructor () {
        this.itemsToReveal = document.querySelectorAll('.card--reveal')
        this.browserHeight = window.innerHeight
        this.hideInitially()
        this.scrollThrottle = throttle(this.setScrollToReveal, 300).bind(this)
        this.events()
    }

    events() {
        window.addEventListener('scroll', this.scrollThrottle)
        window.addEventListener('resize', debounce(() => {
            this.browserHeight = window.innerHeight
        }, 300))
    }

    setScrollToReveal() {
        this.itemsToReveal.forEach((item) => {
            if (item.isRevealed === false) {
                this.scrollToReveal(item)
            }
        })
    }

    scrollToReveal(item) {
        if (window.scrollY + this.browserHeight > item.offsetTop) {
            const percentY = (item.getBoundingClientRect().top / this.browserHeight) * 100

            if (percentY < 99) {
                item.classList.add('card--reveal-visible')
                item.isRevealed = true

                if (item.isLastItem) {
                    window.removeEventListener('scroll', this.scrollThrottle)
                }
            }
        }
    }

    hideInitially() {
        this.itemsToReveal.forEach((item) => {
            item.isRevealed = false
        })
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true
    }
}