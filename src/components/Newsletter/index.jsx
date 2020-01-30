import { Link } from 'hyperstatic'
import Container from '../../components/Container'
import Column from '../../components/Column'
import './style.sass'

export default () => (
    <section class="c-newsletter">
        <Container align="center">
            <Column width="8">
                <div style={{'border': '10px solid #124554', 'color': '#124554', 'padding': '20px 30px'}} data-aos="fade-up">
                    <Container valign="stretch">
                        <Column width="6">
                            <h4><span>Altijd op de hoogte blijven?</span></h4>
                            <p>Wil je weten wanneer we nieuwe workshops of trainigen doen? Laat dan je e-mail adres achter zodat we je iets kunnen laten weten!</p>
                        </Column>
                        <Column width="6">
                        <script type="text/javascript" src="https://www.formlets.com/static/js/iframeResizer.min.js"></script>
                        <iframe class="formlets-iframe" src="https://www.formlets.com/forms/Uc6WP1111thNLNVI/?iframe=true&nofocus=y" frameborder="0" width="100%"></iframe>
                        <script type="text/javascript" src="https://www.formlets.com/static/js/iframe.js"></script>
                        </Column>
                    </Container>
                </div>
            </Column>
        </Container>
    </section>
)
