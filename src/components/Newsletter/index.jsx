import { Link } from 'hyperstatic'
import Container from '../../components/Container'
import Column from '../../components/Column'
import { i18n } from '../../utils'
import './style.sass'

export default ({state}) => (
    <section class="c-newsletter">
        <Container align="center">
            <Column width="8">
                <div class="c-newsletter-inner" data-aos="fade-up">
                    <Container valign="stretch">
                        <Column width="6">
                            <h4>{i18n(state.locale, 'newsletter.title')}</h4>
                            {i18n(state.locale, 'newsletter.text', true)}
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
