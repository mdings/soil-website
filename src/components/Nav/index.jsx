import { Link } from 'hyperstatic'
import Logo from '../../components/Logo'

import './style.sass'

export default () => (
    <nav>
        <Link to="/">
            <Logo />
        </Link>
    </nav>
)
