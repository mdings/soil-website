import Container from '../../components/container'
import Cta from '../../components/cta'

import './style.sass'

export default ({to}, children) => (
    <div class="c-register-block">
        <Container valign="baseline">
            <span data-aos="fade-up" data-aos-delay="200">{children}</span>
            <Cta to={to}>Inschrijven!</Cta>
        </Container>    
    </div>
)