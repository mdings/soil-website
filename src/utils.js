import nl from './locales/nl-nl.json'
const dotProp = require('dot-prop')
import cc from 'classcat'

export const i18n = (locale, prop, paragraph = false) => {
    const lang = locale.substring(0,2)
    const translations = { nl }
    const html = dotProp.get(translations[lang], prop)
    return <span innerHTML={html} class={cc({
        'paragraph': paragraph
    })} data-translate></span>
}