import './style.sass'
import cc from 'classcat'

export default ({align = "left"}, children) => (
    <div class={({
        'c-container': true,
        'c-container--center': align == 'center'
    })}>{children}</div>
)
