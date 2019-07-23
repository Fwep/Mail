document.addEventListener('DOMContentLoaded', () => {
  let sidebarItems = document.querySelectorAll('.sidebar-nav li');
  sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
      let {innerText} = item;
      window.location.hash = innerText.toLowerCase();
    })
  });
});