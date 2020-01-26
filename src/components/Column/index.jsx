import './style.sass'
import cc from 'classcat'
export default ({width = 12, flex = false}, children) => (
    <span class={cc({
        'c-column': true,
        'c-column--flex': flex == true,
        'c-column--one': width == 1,
        'c-column--two': width == 2,
        'c-column--three': width == 3,
        'c-column--four': width == 4,
        'c-column--five': width == 5,
        'c-column--six': width == 6,
        'c-column--seven': width == 7,
        'c-column--eight': width == 8,
        'c-column--nine': width == 9,
        'c-column--ten': width == 10,
        'c-column--eleven': width == 11,
        'c-column--twelve': width == 12
    })}>{children}</span>
)
