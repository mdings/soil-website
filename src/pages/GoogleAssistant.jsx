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
                    <h1 data-aos="fade-up">Google Assistant Workshop</h1>
                    <Registerblock to="https://www.eventbrite.nl/e/tickets-chatbot-discovery-track-91518148245"><strong>Donderdag 16 en vrijdag 17 april 2020</strong><br />Lichttoren Eindhoven</Registerblock>
                    {/* Deze training op locatie? <Anchor to="nowhere">Neem contact op</Anchor> */}
                </Column>
            </Container>
                    
        </Header>
        <Container align="center">
            <Column width="8">
                <div class="article__content">
                    <Colorblock type="2">
                        <div data-aos="fade-up">
                            <p>We kunnen bijna niet meer om smart speakers heen. Gartner voorspelt dat nog dit jaar ongeveer 75% van de huishoudens een slimme assistent in bezit heeft. Wellicht de meest dominante in Nederland is momenteel de Google Assistant, dat met het onlangs onthullen van Meena de gebruikservaring next-level maakt. Een succesvolle journey naar voice brengen lijkt echter niet zo vanzelfsprekend. In deze 2-daagse workshop kijken we naar de mogelijkheden en gaan we zelf aan de slag met een dialoog!</p>
                        </div>
                    </Colorblock>
                    <p data-aos="fade-up">
                        <strong>Voor wie?</strong>
                        Deze workshop is voor (online) marketeers, conversational copywriters en product owners. We gaan namelijk zelf aan de slag met het bouwen van een conversatie, die we uiteindelijk ook gaan testen in de Google Assistant. 
                    </p>
                    <ul data-aos="fade-up">
                        <strong>Topics dag 1</strong>
                        <li>De huidige staat van smart speakers.</li>
                        <li>De werking van een smart speaker (Machine Learning vs. NLP). Hoe herkent een smart speaker bijvoorbeeld de input van een gebruiker?</li>
                        <li>Conversational jargon uitgelegd zoals intent, invocation en deep-linking.</li>
                        <li>Voice Search Readiness scan. Hoe goed doe je bedrijf het nu al in smart speakers?</li>
                        <li>Van Graphical User Interface naar Voice User Interface.</li>
                        <li>Schrijven voor smart speakers: een vak apart. Best-practices en voorbeelden.</li>
                        <li>Het opzetten en testen van een dialoog.</li>
                        <li>SSML gebruiken om variatie aan te brengen in de stem van de uitspraak.</li>
                    </ul>
                    <ul data-aos="fade-up">
                        <strong>Topics dag 2</strong>
                        <li>Smart speakers en privacy.</li>
                        <li>Google's business model. Ben je eigenlijk klant of product?</li>
                        <li>Het technisch landschap achter de Google Assistant.</li>
                        <li>Aan de slag met Google Assistant in Dialogflow.</li>
                        <li>Leveranciers-selectie en de belangrijke criteria waarop je wilt gaan selecteren.</li>
                        <li>Publishen van onze skill of app.</li>
                        <li>Je bedrijf of organisatie transformeren voor de inzet van de Google Assistant.</li>
                    </ul>
                    <div data-aos="fade-up">
                        <strong>Na afloop van deze workshop:</strong>
                        <Colorblock type="2">
                            <ol>
                                <li>Ken je alle termen die van toepassing zijn bij het inzetten van de Google Assistant als marketing tool.</li>
                                <li>Weet je hoe je snel een nieuwe dialoog kunt opzetten en testen.</li>
                                <li>Zie je de mogelijkheden en doorgrond je de onmogelijkheden van smart speakers.</li>
                                <li>Heb je een goed begrip van de principes achter "Conversational Copywriting". En waarom dit zo belangrijk is om de klant zijn taak via een smart speaker te laten voltooien.</li>
                                <li>Kies je vol vertrouwen en onderbouwd de juiste leverancier.</li>
                                <li>Snap je welke position de Google Assistant inneemt in het technisch landschap.</li>
                                <li>Snap je waarom de meeste voice-toepassingen niet succesvol zijn. En hoe die van jou dat wél wordt.</li>
                                <li>Kun je een innovatie-cultuur stimuleren om meer draagvlak te creeëren om aan de slag te gaan met voice projecten. Maar ook daarna kun je dat draagvlak cultiveren om andere innovatieve projecten op te zetten.</li>
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
                            Maarten werkt al bijna 20 jaar in de tech-branch met en voor grote internationale bedrijven. Als Solution Architect is hij dagelijks bezig om op het eerste gezicht complexe concepten begrijpelijk en inzichtelijk te maken. Door zijn voorliefde voor digitale trends en innovatie weet hij steeds wat er speelt in de markt en hoe dit impact heeft op bedrijven. Door zijn kennis kan hij business problemen eenvoudig vertalen naar technologische oplossingen. Hierdoor kunnen bedrijven sneller en met meer vertrouwen van idee naar uitwerking.
                        </p>
                    </div>
                </Column>
            </Container>
        </Authorblock>
        <Container align="center">
            <Column width="8">
                <Registerblock to="https://www.eventbrite.nl/e/tickets-chatbot-discovery-track-91518148245"><strong>Donderdag 16 en vrijdag 17 april 2020</strong><br />Lichttoren Eindhoven</Registerblock>
            </Column>
        </Container>
        </article>
    </div>
)
  