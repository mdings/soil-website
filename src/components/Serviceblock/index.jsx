import { Link } from 'hyperstatic'
import cc from 'classcat'
import './style.sass'

const SetPosition = (state) => {
    event.preventDefault()
    console.log('k')
    return {...state}
}

export default ({to, disabled}, children) => (
    <Link to={to} class="c-service-block" data-aos="zoom-in">
        <span>
            <svg viewBox="0 0 20 20"><path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"/></svg>
            <div>
                {children}
                <span class={cc({
                    'c-service-block__disabled': true,
                    'is-visible': disabled
                })}>Binnenkort!</span>
            </div>
        </span>
    </Link>
)
