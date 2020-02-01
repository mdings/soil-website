import { Link } from 'hyperstatic'
import Logo from '../../components/Logo'

import './style.sass'

export default ({state}, children) => (
    <nav>
        <Link to={`/${state.locale}`}>
            <Logo />
        </Link>
        <span>Nieuwe data beschikbaar!&nbsp; <Link to={`${state.locale}/agenda`}>Check onze agenda! &rarr;</Link></span>
    </nav>
)
