import Header from '../components/Header'
import Column from '../components/Column'
import Anchor from '../components/Anchor'
import Cta from '../components/Cta'
import Container from '../components/Container'
import Colorblock from '../components/Colorblock'
import Authorblock from '../components/Authorblock'
import Registerblock from '../components/Registerblock'

import Maarten from '../../static/assets/authors/maartendings.jpg'

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
                    <h1 data-aos="fade-up">Chatbot Discovery Track</h1>
                    <Registerblock to="https://www.eventbrite.nl/e/tickets-chatbot-discovery-track-91518148245"><strong>Donderdag 19 maart 2020</strong><br />Lichttoren Eindhoven</Registerblock>
                    {/* Deze training op locatie? <Anchor to="nowhere">Neem contact op</Anchor> */}
                </Column>
            </Container>
                    
        </Header>
        <Container align="center">
            <Column width="8">
                <div class="article__content">
                    <Colorblock>
                        <div data-aos="fade-up">
                            <p>Volgens onderzoek van Gartner wordt in 2020 meer dan 85% van alle digitale klantinteracties zonder menselijke tussenkomst afgehandeld. Veel van deze automatische interacties zullen gebruik maken van chatbots. Maar hoe werken chatbots precies? En waar kun je ze allemaal voor inzetten? In deze discovery track duiken we o.a. dieper in deze vragen en kijken we of een chatbot ook waardevol kan zijn voor jouw bedrijf.</p>
                        </div>
                    </Colorblock>
                    <p data-aos="fade-up">
                        <strong>Voor wie?</strong>
                        Deze track is bedoeld voor product- of business-owners, (online) marketeers, innovatie managers en eigenlijk iedereen die een chatbot op zijn of haar verlanglijstje heeft staan en toch nog veel vragen heeft. 
                    </p>
                    <ul data-aos="fade-up">
                        <strong>Topics</strong>
                        <li>De werking van een chatbot (Machine Learning vs. NLP). Hoe herkent een chatbot bijvoorbeeld de input van een gebruiker?</li>
                        <li>Welk probleem we nou eigenlijk willen oplossen met een chatbot.</li>
                        <li>Welke stappen je logischerwijs als eerste kunt nemen als je aan de slag wilt met een chatbot. We gebruiken hiervoor het Crawl-Walk-Run-Fly model om de stappen concreet te maken voor je huidige situatie.</li>
                        <li>De toegevoegde waarde en het terugverdien model van een chatbot (En hoe je die vervolgens meet en bijstuurt).</li>
                        <li>Wat en wie je allemaal nodig hebt bij het succesvol inzetten van een chatbot.</li>
                        <li>Leveranciers-selectie en de belangrijke criteria waarop je wilt gaan selecteren.</li>
                        <li>Succes-scenarios voor een chatbot. Wat maakt een chatbot nou eigenlijk goed? En wat werkt bijvoorbeeld niet?</li>
                        <li>Je bedrijf of organisatie transformeren voor de inzet van een chatbot.</li>
                    </ul>
                    <div data-aos="fade-up">
                        <strong>Na afloop van deze workshop:</strong>
                        <Colorblock>
                            <ol>
                                <li>Kun je beoordelen waar een chatbot je bedrijf vooruit helpt.</li>
                                <li>Heb je inzichtelijk waar je moet beginnen om een chatbot succesvol in te zetten binnen jouw bedrijf of afdeling.</li>
                                <li>Kun je uitleggen hoe een chatbot werkt en weet je hoe Artificial Intelligence hierbij wordt ingezet.</li>
                                <li>Kies je vol vertrouwen en onderbouwd de juiste leveranciers.</li>
                                <li>Herken je een goede chatbot en weet je ook waarom.</li>
                                <li>Kun je een innovatie-cultuur stimuleren om meer draagvlak te creeëren om aan de slag te gaan met chatbots. Maar ook daarna kun je dat draagvlak cultiveren om andere innovatieve projecten op te zetten.</li>
                            </ol>
                        </Colorblock>
                    </div>
                </div>
            </Column>
        </Container>
            <Authorblock>
                <Container align="center">
                    <Column width="8">
                        <div data-aos="fade-up">
                            <img src={Maarten} />
                            <p>
                                <strong>Deze track wordt gegeven door Maarten Dings</strong><br />
                                Maarten werkt al bijna 20 jaar in de tech-branch met en voor grote internationale bedrijven. Als Solution Architect is hij dagelijks bezig om op het eerste gezicht complexe concepten begrijpelijk en inzichtelijk te maken. Door zijn voorliefde voor digitale trends en innovatie weet hij steeds wat er speelt in de markt en hoe dit impact heeft op bedrijven. Door zijn kennis kan hij business problemen eenvoudig vertalen naar technologie oplossingen. Hierdoor kunnen bedrijven sneller en met meer vertrouwen van idee naar uitwerking.
                            </p>
                        </div>
                    </Column>
                </Container>
        </Authorblock>
        <Container align="center">
            <Column width="8">
                <Registerblock to="https://www.eventbrite.nl/e/tickets-chatbot-discovery-track-91518148245"><strong>Donderdag 19 maart 2020</strong><br />Lichttoren Eindhoven</Registerblock>
            </Column>
        </Container>
        </article>
    </div>
)
  