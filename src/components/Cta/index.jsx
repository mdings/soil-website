import cc from 'classcat'
import './style.sass'


export default ({to, disabled = false}, children) => (
    <a class={({
        'c-cta': true,
        'is-disabled': disabled === true
    })} href={to} data-aos="fade-up">{children}</a>
)
