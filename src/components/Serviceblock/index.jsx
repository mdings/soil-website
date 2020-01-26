import { Link } from 'hyperstatic'

console.log(Link)
import './style.sass'

export default ({to}, children) => (
    <Link to={to} class="c-service-block" data-aos="zoom-in">
        <span>{children}</span>
    </Link>
)
