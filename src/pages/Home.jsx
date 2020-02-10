
import Anchor from '../components/Anchor'
import Header from '../components/Header'
import Serviceblock from '../components/Serviceblock'
import Callout from '../components/Callout'
import Column from '../components/Column'
import Container from '../components/Container'
import { i18n } from '../utils'

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
                            <Callout>
                                {i18n(state.locale, 'home.callout')}
                            </Callout>
                        </Column>
                </Container>
                <Container>
                    <Column width="8">
                            <p data-aos="fade-up" data-aos-delay="200">
                                {i18n(state.locale, 'home.intro')}
                            </p>
                        </Column>
                </Container>
            </div>
        </Header>
        <section class="about-us">
            <Container>
                <Column width="6">
                    <h1 data-aos="fade-up">{i18n(state.locale, 'home.about-title')}</h1>
                    {i18n(state.locale, 'home.about-text', true)}
                </Column>
                <Column width="6">
                   
                </Column>
            </Container>
        </section>
        <section class="services">
            <Container>
                <Column width="4">
                    <h2 data-aos="fade-up">{i18n(state.locale, 'home.workshops-title')}</h2>
                    {i18n(state.locale, 'home.workshops-text', true)}
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
  