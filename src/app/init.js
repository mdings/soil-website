import AOS from 'aos'

const fx = a => b => [a,b]

const SetupAOS = () => {
    requestAnimationFrame(() => {
        AOS.init({once: false, mirror: false})
    })
}

export default [{
}, SetupAOS()]