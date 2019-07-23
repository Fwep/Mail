const Router = require('./router');
const Inbox = require('./inbox');

const routes = {
  compose: null,
  inbox: Inbox,
  sent: null
}

document.addEventListener('DOMContentLoaded', () => {
  let contentNode = document.querySelector('.content')
  let router = new Router(contentNode, routes);
  router.start();
  window.location.hash = '#inbox';
  
  let sidebarItems = document.querySelectorAll('.sidebar-nav li');
  sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
      let innerText = item.innerText;
      window.location.hash = innerText.toLowerCase();
    })
  });
});

window.Router = Router;