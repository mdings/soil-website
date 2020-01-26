import { Link } from 'hyperstatic'
import Logo from '../../../static/assets/Soil_logo_Def-01.png'

import './style.sass'

export default () => (
    <nav>
        <Link to="/">
            <img class="c-logo" src={Logo} alt="Soil Logo" />
        </Link>
    </nav>
)
