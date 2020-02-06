
const LoadScript = (url, callback) => {
    const script = document.createElement('script')
    script.type = "text/javascript"
    if (script.readyState) { // only required for IE <9
        script.onreadystatechange = () => {
            if (script.readyState === "loaded" || script.readyState === "complete") {
                script.onreadystatechange = null
                callback()
            }
        }
    } else {
        script.onload = callback
    }

    script.src = url
    document.getElementsByTagName('head')[0].appendChild(script)
}

const subFx = a => b => [a, b]
export const PopState = subFx((dispatch, props) => {
  const handleLocationChange = ev => {
    // dispatch([props.action, window.location.pathname + window.location.search])
  }
  // This only handles the back butto scenario
  addEventListener('popstate', handleLocationChange)
  return () => {
    removeEventListener('popstate', handleLocationChange)
  }
})

export const Navigate = subFx((dispatch, props) => {
    let oldHref = document.location.href
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (oldHref != document.location.href) {
                oldHref = document.location.href
                document.documentElement.scrollTop = '0px'
            }
        })
    })
    observer.observe(document.body, { childList: true, subtree: true })
})

export const SetupCognito = subFx((dispatch, props) => {
    const observer = new MutationObserver(mutations => {
        if (document.contains(document.querySelector('.cognito'))) {
            LoadScript('https://services.cognitoforms.com/s/OJAdgUmTCESLvGBnnaOGOg', () => {
                Cognito.load('forms', { id: '1' })
            })
            observer.disconnect()
        }
    })
    observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true})
})