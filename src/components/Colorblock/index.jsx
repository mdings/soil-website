import './style.sass'
import cc from 'classcat'

export default ({type = 1}, children) => (
    <div class={cc({
        'c-color-block': true,
        'c-color-block--type-2': type == 2
    })}>
        {children}
    </div>
)
