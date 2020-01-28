import './style.sass'
import cc from 'classcat'

export default ({align = "left", valign = null}, children) => (
    <div class={({
        'c-container': true,
        'c-container--center': align == 'center',
        'c-container--baseline': valign == 'baseline',
        'c-container--stretch': valign == 'stretch',
    })}>{children}</div>
)
