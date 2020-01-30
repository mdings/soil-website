import AOS from 'aos'
import Swiper from 'swiper'

const SetupSwiper = () => {
    setTimeout(() => {
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            preloadImages: false,
            freeMode: true,
            lazy: true,
            loop: true,
            watchSlidesVisibility: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        })
    }, 1000)
}
const SetupEventbrite = () => {
    requestAnimationFrame(() => {
        var exampleCallback = function() {
            console.log('Order complete!');
        };
        
        window.EBWidgets.createWidget({
            widgetType: 'checkout',
            eventId: '91518148245',
            modal: true,
            modalTriggerElementId: 'eventbrite-widget-modal-trigger-91518148245',
            onOrderComplete: exampleCallback
        });
    })
}

const SetupAOS = () => {
    requestAnimationFrame(() => {
        AOS.init({once: true, mirror: false})
    })
}

export default [{
}, SetupAOS(), SetupSwiper()]