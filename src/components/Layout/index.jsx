import { Router } from 'hyperstatic'
import Header from '../Header'
import Footer from '../Footer'
import Nav from '../Nav'

import './aos.scss'
import './global.sass'

// Root application view
export default (state) => (
    <div>
        <Nav />
        {Router(state)}
    </div>
)
