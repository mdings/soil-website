import { Router } from 'hyperstatic'
import Header from '../Header'
import Footer from '../Footer'
import Nav from '../Nav'
import Newsletter from '../Newsletter'
import cc from 'classcat'
import './aos.scss'
import './global.sass'

const CheckTouch = () => {
    return 'ontouchstart' in document.documentElement
        || navigator.maxTouchPoints > 0
        || navigator.msMaxTouchPoints > 0
}
// Root application view
export default (state) => (
    <div class={cc({
        'is-touch': CheckTouch()
    })}>
        <Nav state={state} />
        {Router(state)}
        <Newsletter />
        <Footer />
    </div>
)
