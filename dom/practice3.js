//dom/practice3.js

let data = [{id: 101, name: '홍길동', age: 20}, {id: 102, name: '김길동', age: 22}, {id: 103, name: '이길동', age: 30}];

document.addEventListener('DOMContentLoaded', callbackFnc);

function callbackFnc() {
  //부모-자식 관계 다양한 표현
  console.log(window);
  window.document.children[0].children[1].children[0].innerHTML = '안녕';
  //                html        body          h3                => <h3>안녕</h3>으로 출력
  let h3 = window.document.children[0].children[1].children[0];
  let newH3 = document.createElement('h3');
  newH3.innerHTML = '반가워';
  h3.parentElement.appendChild(newH3);
  //     body       자식속성 추가

  //테이블 작성
  let tableTag = document.createElement('table');
  tableTag.setAttribute('border', 1);

  theadTag = makeHead();
  tableTag.appendChild(theadTag);
  tbodyTag = makeBody(data);
  tableTag.appendChild(tbodyTag);
  document.getElementById('show').appendChild(tableTag);

  //추가 버튼 이벤트
  let btn = document.querySelector('button');
  btn.addEventListener('click', function () {
    let obj = {};
    let userName = document.getElementById('userName').value;
    obj.name = userName;
    let userAge = document.getElementById('userAge').value;
    obj.age = userAge;
    document.querySelector('table>tbody').appendChild(makeTr(obj));
  });

  //내용 추가
  let newObj = {id:105, name:'김민수', age:25};
  document.querySelector('table>tbody').appendChild(makeTr(newObj));

}

function makeHead() {
  let theadTag = document.createElement('thead');
  let trTag = document.createElement('tr');
  trTag.setAttribute('style', 'background:yellow;');
  let thTag = document.createElement('th');
  let text = document.createTextNode('이름');
  thTag.appendChild(text);
  trTag.appendChild(thTag);

  thTag = document.createElement('th');
  text = document.createTextNode('나이');
  thTag.appendChild(text);
  trTag.appendChild(thTag);

  thTag = document.createElement('th');
  text = document.createTextNode('삭제');
  thTag.appendChild(text);
  trTag.appendChild(thTag);

  theadTag.appendChild(trTag);

  return theadTag;
}

function makeTr(obj) {
  let fields = ['name', 'age'];
  let trTag = document.createElement('tr');
  trTag.setAttribute('id', obj.id);

  fields.forEach((field) => {
    let tdTag = document.createElement('td');
    let text = document.createTextNode(obj[field] + `${field=='age'?'살':''}`);
    tdTag.appendChild(text);
    trTag.appendChild(tdTag);
  });
  let btn = document.createElement('button');
  btn.innerHTML = '삭제';
  let tdTag = document.createElement('td');
  trTag.appendChild(tdTag);
  tdTag.appendChild(btn);

  btn.addEventListener('click', deleteCallBack);
  //deleteCallBack() 함수 실행

  return trTag;
}

function deleteCallBack() {
  // console.log(event);
  //console.log(event.target.parentElement.parentElement.remove()); => undefidned 출력
  // event.target.parentElement.parentElement.remove(); 
  // 이벤트 targer: 버튼의 부모요소 td 의 부모요소 tr를 보여줌.remove 하면 tr의 행 하나가 삭제
  console.log(this); //event.target을 가르킴
  this.parentElement.parentElement.remove();
}

function makeBody(objAry) {
  let tbodyTag = document.createElement('tbody');

  objAry.forEach((obj) => {
    tbodyTag.appendChild(makeTr(obj));
  });
  return tbodyTag;
}