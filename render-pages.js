const renderPages = require('hyperstatic/src/renderPages');

(async () => {
  let pages = [
    '/nl-nl',
    '/nl-nl/agenda',
    '/nl-nl/chatbot-discovery-track',
    '/nl-nl/google-assistant-workshop'
  ]

  renderPages(pages)
    .then(() => {
      console.log('All pages rendered!')
      process.exit(0)
    })
})()
