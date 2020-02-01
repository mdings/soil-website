import Rellax from 'rellax'


const subFx = a => b => [a, b]
export const PopState = subFx((dispatch, props) => {
  const handleLocationChange = ev => {
      console.log('using backword and forward')
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
                console.log(document.location.href)
                document.documentElement.scrollTop = '0px'
            }
        })
    })
    observer.observe(document.body, { childList: true, subtree: true })

})

export const Parallax = subFx((dispatch, props) => {
    const observer = new MutationObserver(mutations => {
        if (document.contains(document.querySelector('[data-observe-parallax]'))) {
            const rellax = new Rellax('.rellax', {});
            observer.disconnect()
        }
    })

    observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true})

})