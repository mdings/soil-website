
import Column from '../components/Column'
import Container from '../components/Container'
import Header from '../components/Header'
import Registerblock from '../components/Registerblock'

import './home.sass'
import Agendaitem from '../components/Agendaitem'

export const Init = (state) => ({
    ...state,
    counter: 0
})

export default state => (
    <div class="p-agenda">
        <Header>
        <Container>
                <Column width="7">
                    <h1 data-aos="fade-up">Volledige agenda</h1>
                   <p>Onderstaand tref je alle data aan waarop wij georganiseerde workshops en trainingen geven.</p>
                   <p>Daarnaast is er altijd de mogelijkheid om een training in-company of op een extnerne locatie te organiseren. Neem <a href="mailto:sayhi@meetsoil.com">contact</a> met ons op voor meer informatie hierover.</p>
                </Column>
            </Container>
                    
        </Header>
        <section class="agenda">
           <Container>
                <Column width="12">
                    <Agendaitem to="https://www.eventbrite.nl/e/92785133833" code="CHA" date="3/18/2020" location="Lichttoren Eindhoven">Chatbot Discovery Track</Agendaitem>
                    <Agendaitem to="https://www.eventbrite.nl/e/89022784545" delay="100" code="GOO" date="4/16/2020" location="Lichttoren Eindhoven">Google Assistant Workshop (dag 1)</Agendaitem>
                    <Agendaitem to="https://www.eventbrite.nl/e/89022784545" delay="200"code="GOO" date="4/17/2020" location="Lichttoren Eindhoven">Google Assistant Workshop (dag 2)</Agendaitem>
                    <Agendaitem delay="300" code="ATO">Atomic Design Training</Agendaitem>
                    <Agendaitem delay="400" code="COR">Core Modeling Workshop</Agendaitem>
                </Column>
           </Container>
        </section>
    </div>
)
  