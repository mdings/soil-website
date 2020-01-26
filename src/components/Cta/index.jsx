import cc from 'classcat'
import './style.sass'


export default ({to}, children) => (
    <a class="c-cta" href={to}>{children}</a>
)
