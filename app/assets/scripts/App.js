import '../styles/styles.css'

import './modules/MasonryLayout'
//import ScrollToTop from './modules/ScrollToTop'
import ViewMore from './modules/ViewMore'
import RevealOnScroll from './modules/RevealOnScroll'

let scrollToTop
//new ScrollToTop()

new ViewMore()

new RevealOnScroll()

window.addEventListener('scroll', () => {
    if (typeof scrollToTop === "undefined") {
        import('./modules/ScrollToTop').then(x => {
            scrollToTop = new x.default()
            setTimeout(() => scrollToTop.scrollThrottle(), 10)
        }).catch(() => console.log('error'))
    } else {
        scrollToTop.scrollThrottle()
    }
})

if (module.hot) {
    module.hot.accept()
}
