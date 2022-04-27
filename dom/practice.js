//dom/practice.js

document.addEventListener('DOMContentLoaded', function () {
  let btn = document.querySelector('button');
  btn.addEventListener('click', function () {
    //사용자 입력값1, 입력값2
    let name = document.getElementById('userName').value;
    let age = document.getElementById('userAge').value;

    if(!name) {
      alert('이름를 입력하세요..');
      return;
    }
    if(!age) {
      alert('나이를 입력하세요..');
      return;
    }

    let span1 = document.createElement('span'); // <span>${name}</span>
    span1.innerHTML = name;
    let span2 = document.createElement('span'); // <span>${age}</span>
    span2.innerHTML = age;
    let div1 = document.createElement('div');
    div1.appendChild(span1);
    div1.appendChild(span2);

    document.getElementById('show').appendChild(div1); //화면출력
  });
});