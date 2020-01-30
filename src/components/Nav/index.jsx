import { Link } from 'hyperstatic'
import Logo from '../../components/Logo'

import './style.sass'

export default ({state}, children) => (
    <nav>
        <Link to={`/${state.locale}`}>
            <Logo />
        </Link>
    </nav>
)
