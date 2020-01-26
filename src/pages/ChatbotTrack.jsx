import Header from '../components/Header'
import Column from '../components/Column'
import Cta from '../components/Cta'
import Container from '../components/Container'
import Colorblock from '../components/Colorblock'
import Authorblock from '../components/Authorblock'

export const Init = (state) => ({
    ...state,
    counter: 0
})

export default state => (
    <div class="p-workshop">
        <Header>
            <Container>
                <Column width="7">
                    <h1 data-aos="fade-in">Chatbot Discovery Track</h1>
                </Column>
            </Container>
            <Container>
                <p>Donderdag 18 maart 2020 - Lichttoren Eindhoven</p>
                <Cta to="https://www.eventbrite.nl/e/tickets-chatbot-discovery-track-91518148245">Meteen inschrijven!</Cta>
            </Container>
                    
        </Header>
        <Container align="center">
            <Column width="10">
                <Colorblock>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni tempore illum unde? Explicabo, nulla officiis sequi sed perspiciatis, odit laudantium dolorem, debitis consectetur quod illo impedit eaque fuga modi earum.</p>
                </Colorblock>
                <p>
                    <strong>Voor wie?</strong>
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas veniam id assumenda! Fuga reiciendis voluptate assumenda sint iste at laboriosam vero voluptates? Ducimus repudiandae omnis ut dolor ipsam quis obcaecati?
                </p>
                <p>
                    <strong>Topics</strong>
                </p>
                <ul>
                    <li>Bla fdfd </li>
                    <li>Bla fdfd </li>
                    <li>Bla fdfd </li>
                    <li>Bla fdfd </li>
                </ul>
                <p>
                    <strong>Na deze workshop weet je</strong>
                    <Colorblock>
                    <ol>
                        <li>Bla fdfd </li>
                        <li>Bla fdfd </li>
                        <li>Bla fdfd </li>
                        <li>Bla fdfd </li>
                    </ol>
                    </Colorblock>
                </p>
            </Column>
        </Container>
        <Authorblock>
            <Container align="center">
                <Column width="10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloremque accusamus porro tempore dolores alias quis. Iure perspiciatis, culpa necessitatibus labore veniam voluptas eligendi excepturi maiores delectus consequatur, laboriosam fuga.
                </Column>
            </Container>
        </Authorblock>
    </div>
)
  