function getFirstSelector(selector){
  return document.querySelector(selector)
}


function nestedTarget(){
  return document.querySelector('#nested .target')

}


function increaseRankBy(n){
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for(var i = 0; i < list.length;i++){
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString();
  }
}


function deepestChild(){
  const list = document.getElementById('app').querySelectorAll('#grand-node');
  var current = list[0];
  var next;

  while(current.querySelectorAll('div').length > 0){
    current = current.children[0];
  }

  return current



}
