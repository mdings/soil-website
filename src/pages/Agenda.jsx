import Header from '../components/Header'
import Serviceblock from '../components/Serviceblock'
import Callout from '../components/Callout'
import Column from '../components/Column'
import Cta from '../components/cta'
import Container from '../components/Container'
import Gallery from '../components/Gallery'
import Galleryitem from '../components/Galleryitem'

import './home.sass'
import Agendaitem from '../components/Agendaitem'

export const Init = (state) => ({
    ...state,
    counter: 0
})

export default state => (
    <div class="p-agenda">
        <Container>
            <Column width="7">
                <h1>Volledige agenda</h1>
            </Column>
        </Container>
        <Container>
            <Column width="8">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat mollitia atque porro temporibus. Illum officiis eum atque natus facere in esse quidem odit rerum, ea deleniti neque commodi, assumenda dicta.</p>
            </Column>
        </Container>
        <section class="agenda">
           <Container>
                <Column width="12">
                    <Agendaitem code="CHA" date="3/18/2020" location="Lichttoren Eindhoven">Chatbot Discovery Track</Agendaitem>
                    <Agendaitem delay="100" code="GOO" date="4/22/2020" location="Lichttoren Eindhoven">Google Assistant Workshop</Agendaitem>
                    <Agendaitem delay="200"code="CHA" date="4/25/2020" location="Lichttoren Eindhoven">Chatbot Discovery Track</Agendaitem>
                    <Agendaitem delay="300" code="ATO">Atomic Design Training</Agendaitem>
                    <Agendaitem delay="400" code="COR">Core Modeling Workshop</Agendaitem>
                </Column>
           </Container>
        </section>
    </div>
)
  