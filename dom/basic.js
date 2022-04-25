//dom/basic.js

//DOM : 생성, 속성, 삭제, 부모-자식 관계
//addEventListener('이벤트이름', '실행할 이벤트 핸들러')
//getElementsByTagName : API요소

//addEventListener를 사용하지 않으면 <script src>위치가 하단이 되어야 코드를 읽어올 수 있음
let h3Tag = document.getElementsByTagName('h3');
console.log(h3Tag); //HTMLCollection []

console.log('1');

document.addEventListener('DOMContentLoaded', function(){

  let h3Tag = document.getElementsByTagName('h3'); //HTMLCollection
  console.log(h3Tag);
  h3Tag[1].innerHTML = 'content changed.';

  let first = document.getElementById('first'); //element(결과값이 하나)
  console.log(first);
  first.innerHTML = 'Git Chaged' //값이 하나밖에 없기때문에 인덱스 지정해주지 않아도 됨

  let second = document.getElementsByClassName('first'); //HTMLCollection
  second[0].innerHTML = '사과';

  
  //CSS의 석택자 h3>div
  let list = document.querySelector('ul>li'); //만족하는 첫번째 요소를 가져오겠다
  console.log(list);
  list = document.querySelectorAll('ul>li'); //만족하는 모든 값을 가져오겠다
  list[1].style.background = 'yellow';
  console.log(list);
  
  //DOM 생성
  let newList = document.createElement('li');
  newList.innerHTML = 'Mango';
  console.log(newList);

  //ul 하위요소 <li>Mango
  let ulTag = document.querySelector('ul');
  ulTag.appendChild(newList);

  console.log('2');

});
console.log('3'); //실행 순서가 1>3>2가 된다