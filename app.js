// register a service worker
if("serviceWorker" in navigator) {
  navigator.serviceWorker.register('/serviceWorker.js')
  .then((registration) => {
    console.log("Server worker has been registered",registration.scope)
  }).catch((error) => {
    console.log("Error occured in registering Service worker", error)
  })
}
let bookContainer = document.getElementById('bookContainer')
fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json').then(function(response){
  return response.json()
}).then(function(json){
    let books = json.map(function(each){
      return `<div class="bookItem">
                <h2>${each.title}</h2>
                <img src="https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${each.imageLink}"/>
                <p>${each.author}</p>
             </div>`
    })
    bookContainer.innerHTML = books.join(' ')
})
