import { Link } from 'hyperstatic'
import Callout from '../Callout'
import Container from '../Container'
import Column from '../Column'

import './style.sass'

export default (props, children) => (
    <div class="c-header">
        {children}
    </div>
)
