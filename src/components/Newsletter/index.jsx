import { Link } from 'hyperstatic'
import Container from '../../components/Container'
import Column from '../../components/Column'
import './style.sass'

const LoadForm = state => {
    return {...state}
}
export default () => (
    <section class="c-newsletter">
        <Container align="center">
            <Column width="8">
                <div class="c-newsletter-inner" data-aos="fade-up">
                    <Container valign="stretch">
                        <Column width="6">
                            <h4><span>Op de hoogte blijven?</span></h4>
                            <p>Wil je weten wanneer we nieuwe workshops of trainingen doen? Laat dan je e-mail adres achter zodat we je iets kunnen laten weten!</p>
                        </Column>
                        <Column width="6">
                        <div class="cognito" data-cognito-outlet></div>
                        </Column>
                    </Container>
                </div>
            </Column>
        </Container>
    </section>
)
