const navItems = document.getElementsByClassName('hrefItem');
Array.from(navItems).forEach(function(item){
  let href = window.location.href;
  if(href.indexOf(item.getAttribute('href')) != -1){
  }else{
    item.style = `filter: grayscale(1);`;
  }
})
let url = window.location.href;
const home = document.getElementById('home');
if(url.indexOf('/home') == -1){
  home.style = `filter: grayscale(1);`;
}
