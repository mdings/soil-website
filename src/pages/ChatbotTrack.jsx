import Header from '../components/Header'
import Column from '../components/Column'
import Cta from '../components/Cta'
import Container from '../components/Container'
import Colorblock from '../components/Colorblock'
import Authorblock from '../components/Authorblock'

import './training.sass'
export const Init = (state) => ({
    ...state,
    counter: 0
})

export default state => (
    <div class="p-training">
        <article>
        <Header>
            <Container>
                <Column width="7">
                    <h1 data-aos="fade-in">Chatbot Discovery Track</h1>
                </Column>
            </Container>
            <Container>
                <p>Donderdag 18 maart 2020 - Lichttoren Eindhoven</p>
                <Cta to="https://www.eventbrite.nl/e/tickets-chatbot-discovery-track-91518148245">inschrijven!</Cta>
            </Container>
                    
        </Header>
        <Container align="center">
            <Column width="9">
                <div class="article__content">
                    <Colorblock>
                        <p>Volgens onderzoek van Gartner wordt in 2020 meer dan 85% van alle digitale klantinteracties zonder menselijke tussenkomst afgehandeld. Veel van deze automatische interacties zullen gebruik maken van chatbots. Maar hoe werken chatbots precies? En waar kun je ze allemaal voor inzetten? In deze discovery track duiken we dieper in deze vragen en kijken we of een chatbot ook waardevol kan zijn voor uw bedrijf.</p>
                    </Colorblock>
                    <p>
                        <strong>Voor wie?</strong>
                        Deze track is bedoeld voor product of business owners, (online) marketeers, innovatie managers en eigenlijk iedereen die een chatbot op zijn of haar verlanglijstje heeft staan maar toch nog veel vragen heeft. We kijken naar de werking van een chatbot zonder daarbij al te diep in de techniek te duiken. Toch weet je na afloop wat er technisch gezien nodig is om een chatbot succesvol te maken.
                    </p>
                    <ul>
                        <strong>Topics</strong>
                        <li>Hoe werkt een chatbot? (Machine Learning vs. NLP)</li>
                        <li>Wat en wie heb je nodig voor een chatbot?</li>
                        <li>Waarop selecteer je een geschikte chatbot leverancier?</li>
                        <li>Innovatie quickscan van je huidige situatie</li>
                        <li>Wat willen we eigenlijk oplossen met chatbots?</li>
                        <li>Waar verdient een chatbot zichzelf terug?</li>
                        <li>Waar moet een goede chatbot aan voldoen?</li>
                    </ul>
                    <strong>Na deze workshop weet je</strong>
                    <Colorblock>
                    <ol>
                        <li>Bla fdfd </li>
                        <li>Bla fdfd </li>
                        <li>Bla fdfd </li>
                        <li>Bla fdfd </li>
                    </ol>
                    </Colorblock>
                </div>
            </Column>
        </Container>
            <Authorblock>
            <Container align="center">
                <Column width="9">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloremque accusamus porro tempore dolores alias quis. Iure perspiciatis, culpa necessitatibus labore veniam voluptas eligendi excepturi maiores delectus consequatur, laboriosam fuga.
                    </p>
                </Column>
            </Container>
        </Authorblock>
        </article>
    </div>
)
  