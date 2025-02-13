
import Anchor from '../components/Anchor'
import Header from '../components/Header'
import Serviceblock from '../components/Serviceblock'
import Callout from '../components/Callout'
import Column from '../components/Column'
import Container from '../components/Container'
import './home.sass'

export const Init = (state) => ({
    ...state,
    counter: 0
})

export default state => (
    <div class="p-home">
        <Header>
            <div data-observe-parallax>
                <div class="background"></div>
            </div>
            <div>
                <Container>
                    <Column width="6">
                            <Callout>De brug naar nieuwe digitale mogelijk&#8203;heden.</Callout>
                        </Column>
                </Container>
                <Container>
                    <Column width="8">
                            <p data-aos="fade-up" data-aos-delay="200">
                                De wereld om ons heen verandert snel en de digitale revolutie lijkt geen grenzen te kennen. Meer dan ooit is het tech-landschap gefragmenteerd en complex. Er liggen kansen die je kunt benutten en je wilt mee in de vooruitgang, maar waar waar begin je?
                            </p>
                        </Column>
                </Container>
            </div>
        </Header>
        <section class="about-us">
            <Container>
                <Column width="6">
                    <h1 data-aos="fade-up">Wat wij doen</h1>
                    <p data-aos="fade-up">Wij nemen individuen en organisaties bij de hand en maken gecompliceerde innovatieve thema's eenvoudig. Dat doen we door middel van trainingen en programma’s met bewezen tools. Zo laten we iederen profiteren van de mogelijkheden die technologische vooruitgang biedt en maken we innovatie bereikbaar.</p><p data-aos="fade-up">Begin bij het begin. Welkom bij Soil.</p>
                </Column>
                <Column width="6">
                   
                </Column>
            </Container>
        </section>
        <section class="services">
            <Container>
                <Column width="4">
                    <h2 data-aos="fade-up">Workshops &amp; trainingen</h2>
                    <p data-aos="fade-up">Wij bieden onze workshops en trainingen aan in kleine, overzichtelijke groepen. Zo ontstaat er meer interactie en onderlinge samenwerking. Alle trainingen zijn tevens beschikbaar als in-company training. Neem hiervoor <a href="mailto:sayhi@meetsoil.com">contact</a> met ons op.</p>
                    <Anchor href="/nl-nl/agenda">Bekijk de volledige agenda</Anchor>
                </Column>
                <Column width="8" flex={true}>
                    <Serviceblock to={`/${state.locale}/chatbot-discovery-track`}>Chatbot Discovery Track</Serviceblock>
                    <Serviceblock to={`/${state.locale}/google-assistant-workshop`}>Google Assistant Workshop</Serviceblock>
                    <Serviceblock to={`/${state.locale}/chatbot-discovery-track`} disabled>Digital Transformation</Serviceblock>
                    <Serviceblock to={`/${state.locale}/chatbot-discovery-track`} disabled>Core Modeling Workshop</Serviceblock>
                </Column>
            </Container>
        </section>
    </div>
)
  