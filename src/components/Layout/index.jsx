import { Router } from 'hyperstatic'
import Header from '../Header'
import Footer from '../Footer'
import Nav from '../Nav'
import Newsletter from '../Newsletter'
import './aos.scss'
import './global.sass'

// Root application view
export default (state) => (
    <div>
        <Nav state={state} />
        {Router(state)}
        <Newsletter />
        <Footer />
    </div>
)
