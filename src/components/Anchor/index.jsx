import { Link } from 'hyperstatic'
import './style.sass'
import cc from 'classcat'

export default ({href}, children) => (
    <Link to={href} class={cc({
       'c-anchor': true
    })} data-aos="fade-up">{children}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
    </Link>
)
