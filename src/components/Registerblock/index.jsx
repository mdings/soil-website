import Container from '../../components/Container'
import Cta from '../../components/Cta'

import './style.sass'

export default ({to}, children) => (
    <Container valign="baseline">
        <div class="c-register-block">
            <span data-aos="fade-up" data-aos-delay="200">{children}</span>
            <Cta to={to}>Inschrijven!</Cta>
        </div>
    </Container>    
)