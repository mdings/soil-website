
import Anchor from '../components/Anchor'
import Header from '../components/Header'
import Serviceblock from '../components/Serviceblock'
import Callout from '../components/Callout'
import Column from '../components/Column'
import Cta from '../components/cta'
import Container from '../components/Container'
import Newsletter from '../components/Newsletter'
import Rellax from 'rellax'

import './home.sass'

export const Init = (state) => ({
    ...state,
    counter: 0
})

export default state => (
    <div class="p-home">
        <Header>
            <div data-observe-parallax>
                <div class="background rellax" data-rellax-speed="-3"></div>
            </div>
            <Container>
                <Column width="8">
                    <Callout>We hoeven niet meer conservatief te zijn</Callout>
                    <p data-aos="fade-up" data-aos-delay="200">De wereld om ons heen verandert snel en de digitale revolutie lijkt geen grenzen te kennen. Je wilt mee in deze ontwikkeling, maar waar moet je beginnen?</p>
                    </Column>
            </Container>
        </Header>
        <section class="about-us">
            <Container>
                <Column width="6">
                    <h1 data-aos="fade-up">Wat wij doen</h1>
                    <p data-aos="fade-up">Wij nemen individuen en organisaties in het MKB bij de hand en maken gecompliceerde innovatieve thema's eenvoudig. Dat doen we door middel van trainingen en programma’s. Begin bij het begin. Welkom bij Soil.</p>
                </Column>
                <Column width="6">
                    Dit is een button
                </Column>
            </Container>
        </section>
        <section class="services">
            <Container>
                <Column width="4">
                    <h2 data-aos="fade-up">Workshops &amp; trainingen</h2>
                    <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laborum est magni pariatur facilis, illum vel harum sunt dolor alias et cumque rem quae odit, placeat dolore 
                    accusantium optio impedit!</p>
                    <Anchor href="/nl-nl/agenda">Bekijk de volledige agenda</Anchor>
                </Column>
                <Column width="8" flex={true}>
                    <Serviceblock to={`/${state.locale}/chatbot-discovery-track`}>Chatbot Discovery Track</Serviceblock>
                    <Serviceblock to={`/${state.locale}/chatbot-discovery-track`}>Google Assistant Workshop</Serviceblock>
                    <Serviceblock to={`/${state.locale}/chatbot-discovery-track`}>Atomic Design Training</Serviceblock>
                    <Serviceblock to={`/${state.locale}/chatbot-discovery-track`}>Core Modeling Workshop</Serviceblock>
                </Column>
            </Container>
        </section>
    </div>
)
  