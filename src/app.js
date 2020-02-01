import { hyperstatic } from 'hyperstatic'

// App init imports
import routes from './app/routes'
import init from './app/init'
import Layout from './components/Layout'
import { PopState, Parallax } from './app/subscriptions'

const GotoTop = (state, ok) => {
    console.log('going to top')
    return ({...state})
}

// Initialize the app
hyperstatic({
    routes,
    init: [{
        ...init,
        locale: 'nl-nl'
    }],
    view: Layout,
    node: document.getElementById('app'),
    subscriptions: state => [
        PopState({
            action: GotoTop
        }),
        Parallax() 
    ]
})

// Enable the service worker when running the build command
if (process.env.NODE_ENV === 'production') {
    navigator.serviceWorker.register(`${window.location.origin}/sw.js`)
}
