function Router(node, routes) {
  this.node = node;
  this.routes = routes;
}

Router.prototype.activeRoute = function() {
  let {hash} = window.location
  return this.routes[hash.slice(1)];
}

Router.prototype.render = function() {
  let component = this.activeRoute();
  if (!component) {
    this.node.innerHTML = "";
  } else {
    this.node.innerHTML = "";
    this.node.appendChild(component.render());
  }
}

Router.prototype.start = function() {
  this.render();  

  window.addEventListener('hashchange', () => {
    this.render();
  });
}

module.exports = Router;