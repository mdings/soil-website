import './style.sass'
import cc from 'classcat'
import dateFormat from 'dateformat'
import Cta from '../../components/Cta'

dateFormat.i18n = {
    dayNames: [
        'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ],
    monthNames: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
        'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'
    ],
    timeNames: [
        'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
    ]
}

const formatDate = date => dateFormat(date, 'd mmmm yyyy')

export default ({code, date = null, location = null, delay = 0}, children) => (
    <div class={cc({
        'c-agenda-item': true,
        'c-agenda-item--t1': code == 'CHA',
        'c-agenda-item--t2': code == 'GOO',
        'c-agenda-item--t3': code == 'ATO',
        'c-agenda-item--t4': code == 'COR',
    })} data-aos="fade-up" data-aos-delay={delay} data-aos-anchor=".c-agenda-item--t1">
        <span class="c-agenda-item__date">
            {date ? formatDate(date) : 'TBA'}
        </span>
        <span class="c-agenda-item__name">
            {children}
        </span>
        <span class="c-agenda-item__location">
            {location ? location : 'TBA'}
        </span>
        <Cta to="/test" disabled={date==null}>{date ? 'Inschrijven' : 'Binnenkort'}</Cta>
    </div>
)
