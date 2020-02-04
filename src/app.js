import { hyperstatic } from 'hyperstatic'

// App init imports
import routes from './app/routes'
import init from './app/init'
import Layout from './components/Layout'
import { PopState, Navigate, SetupCognito } from './app/subscriptions'

// Go the default Dutch locale when hitting the top-level
const { pathname } = document.location
if (pathname && pathname == '/') {
    history.replaceState(null, '', 'nl-nl')
}

hyperstatic({
    routes,
    init: {
        ...init,
        locale: 'nl-nl'
    },
    view: Layout,
    node: document.getElementById('app'),
    subscriptions: state => [
        PopState(),
        Navigate(),
        SetupCognito()
    ]
})

// Enable the service worker when running the build command
if (process.env.NODE_ENV === 'production') {
    navigator.serviceWorker.register(`${window.location.origin}/sw.js`)
}
