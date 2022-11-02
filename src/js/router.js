export class Router {

  routes = {}

add(routeName, page) {
  this.routes[routeName] = page
}

route = (event) => {
  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, "", event.target.href)

  const {pathname} = window.location

  this.handle()
}

handle = () => {
  const { pathname } = window.location
  const route = this.routes[pathname] || this.routes[404]

  pathname == "/home" ? document.body.style.backgroundImage = "url('/src/images/bg1.png')" : "url(/404.html)"
  pathname == "/universe" ? document.body.style.backgroundImage = "url('/src/images/bg2.png')" : "url(/404.html)"
  pathname == "/exploration" ? document.body.style.backgroundImage = "url('/src/images/bg3.png')" : "url(/404.html)"

  fetch(route)
  .then( ( data ) => { return data.text() })
  .then( html => { document.querySelector('#app').innerHTML = html })
}
}

