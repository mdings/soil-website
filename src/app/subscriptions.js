import Rellax from 'rellax'
// PopState Subscription

var oldHref = document.location.href;

// href change
window.onload = function() {

    var
         bodyList = document.querySelector("body")

        ,observer = new MutationObserver(function(mutations) {

            mutations.forEach(function(mutation) {

                if (oldHref != document.location.href) {

                    oldHref = document.location.href;

                    /* Changed ! your code here */

                }

            });

        });

    var config = {
        childList: true,
        subtree: true
    };

    observer.observe(bodyList, config);

};

const subFx = a => b => [a, b]
export const PopState = subFx((dispatch, props) => {
  const handleLocationChange = ev => {
    dispatch([props.action, window.location.pathname + window.location.search])
  }
  // This only handles the back butto scenario
  addEventListener('popstate', handleLocationChange)
  return () => {
    removeEventListener('popstate', handleLocationChange)
  }
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