import { Link } from 'hyperstatic'
import Logo from '../../components/Logo'

import './style.sass'

export default ({state}, children) => (
    <nav>
        <Link to={`/${state.locale}`}>
            <Logo />
        </Link>
        <span>Nieuwe workshop-data beschikbaar!&nbsp; <Link to={`${state.locale}/agenda`}>Check onze agenda<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"/></svg></Link></span>
    </nav>
)
