import '../styles/styles.css'

import './modules/MasonryLayout'
import ScrollToTop from './modules/ScrollToTop'
import ViewMore from './modules/ViewMore'
import RevealOnScroll from './modules/RevealOnScroll'

const scrollToTop = new ScrollToTop()

new ViewMore()

new RevealOnScroll()

if (module.hot) {
    module.hot.accept()
}
