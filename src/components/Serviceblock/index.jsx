import { Link } from 'hyperstatic'

console.log(Link)
import './style.sass'

export default ({to}, children) => (
    <Link to={to} class="c-service-block" data-aos="zoom-in">
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"/></svg>
            <div>
                {children}
                {/* <span class="c-service-block__more">Lees meer</span> */}
            </div>
        </span>
    </Link>
)
