import AOS from 'aos'

const fx = a => b => [a,b]

const SetupAOS = () => {
    requestAnimationFrame(() => {
        AOS.init({once: true, mirror: true})
    })
}

export default [{
}, SetupAOS()]