









var app = function(){

  var ul = document.createElement('ul');
  ul.classList.add('cat');

  var li_1 = document.createElement('li');
  li_1.innerText = "Name: a new cat";

  var li_2 = document.createElement('li');
  li_2.innerText = "Favourite fame: cheese";

  var li_3 = document.createElement('li');
  
  var img = document.createElement('img');
  img.classList.add('width');
  img.classList.add('src');    


  //add them all in the right order
  li_3.appendChild(img);
  ul.appendChild(li_1);
  ul.appendChild(li_2);
  ul.appendChild(li_3);

  var cats = document.querySelector('#cats');
  cats.appendChild(ul);

}






window.onload = app;