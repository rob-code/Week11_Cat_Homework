


var createul = function(){
  var ul = document.createElement('ul');
  ul.classList.add('cat');
  return ul;
}

var createli_1 = function(){
  var li_1 = document.createElement('li');
  li_1.innerText = "Name: a new cat";
  return li_1;
}

var createli_2 = function(){
  var li_2 = document.createElement('li');
  li_2.innerText = "Favourite fame: cheese";
  return li_2;
}


var createli_3 = function(){
  var li_3 = document.createElement('li');
  return li_3;
}


var createimg = function(){
  var img = document.createElement('img');
  img.classList.add('width');
  img.classList.add('src');   
  return img;
}

var appendElements = function(ul, li_1, li_2, li_3){

  li_3.appendChild(img);
  ul.appendChild(li_1);
  ul.appendChild(li_2);
  ul.appendChild(li_3);

  var cats = document.querySelector('#cats');
  cats.appendChild(ul);

}

var addCat = function(name, favouriteFood, image){
  var ul = createul();
  var li_1 = createli_1(name);
  var li_2 = createli_2(favouriteFood);
  var li_3 = createli_3(image);
  appendElements(ul, li_1, li_2, Li_3)
}



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