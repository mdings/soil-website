import AOS from 'aos'

const SetupEventbrite = () => {
    requestAnimationFrame(() => {
        var exampleCallback = function() {
            console.log('Order complete!');
        };
        
        console.log(window.EBWidgets.createWidget)
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
        AOS.init()
    })
}

export default [{

}, SetupAOS(), SetupEventbrite()]