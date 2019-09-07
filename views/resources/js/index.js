const navItems = document.getElementsByClassName('hrefItem');
Array.from(navItems).forEach(function(item){
  let href = window.location.href;
  if(href.indexOf(item.getAttribute('href')) != -1){
    item.style.borderBottom = "2px #fc4f00 solid";
    //item.getAttribute('href')
  }
})
