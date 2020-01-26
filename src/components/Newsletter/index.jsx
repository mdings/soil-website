import { Link } from 'hyperstatic'
import Container from '../../components/Container'
import Column from '../../components/Column'
import './style.sass'

export default () => (
    <section class="c-newsletter">
            <Container align="center">
                <Column width="9">
                    <div style={{'border': '10px solid #124554', 'color': '#000', 'padding': '150px 50px'}} data-aos="fade-up">
                        <p>Op de hoogte blijven vrienden?</p>
                    </div>
                </Column>
            </Container>
            </section>
)
