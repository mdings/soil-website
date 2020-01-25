import AOS from 'aos'

const services = document.querySelectorAll('.js-service')
let i = 9
services.forEach(service => {
    service.addEventListener('mouseover', e => {
        // help the blocks maintain their z-index
        service.style.zIndex = i++
    })
})


AOS.init()