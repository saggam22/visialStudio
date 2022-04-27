//dom/practice2.js

document.addEventListener('DOMContentLoaded', function() {
  let divTag = document.createElement('div');
  let spanTag1 = document.createElement('span');
  //spanTag1.innerHTML = '홍길동'; 이 아닌 텍스트 노드 생성
  let name = document.createTextNode('홍길동');
  spanTag1.appendChild(name);
  let spanTag2 = document.createElement('span');
  let age = document.createTextNode('20살');
  spanTag2.appendChild(age);
  let hypen = document.createTextNode(' - ');

  divTag.appendChild(spanTag1);
  divTag.appendChild(hypen);
  divTag.appendChild(spanTag2);

  document.getElementById('show').appendChild(divTag);

  //어트리뷰트 노드생성(id 또는 class를 부여)
  spanTag1.setAttribute('id', 'name');
  spanTag2.setAttribute('class', 'age');
});