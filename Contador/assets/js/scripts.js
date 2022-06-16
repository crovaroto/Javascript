var id = document.getElementById('currentNumber');
var num = 0;

function decrement() {
  num--;
  id.innerHTML = num;
  
  if (num < 0) {
    id.style.color =  'red';
  }    
}

function increment() {
  num++;
  id.innerHTML = num;
  
  if (num >= 0) {
    id.style.color =  'black';
  }
}
