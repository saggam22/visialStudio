//dom/practice1.js

document.addEventListener('DOMContentLoaded', function () {
  let ulTag = document.createElement('ul'); //element node
  let liTag1 = document.createElement('li');
  liTag1.innerHTML = '아이스아메리카노';
  let liTag2 = document.createElement('li');
  liTag2.innerHTML = '카페라떼';
  let liTag3 = document.createElement('li');
  liTag3.innerHTML = '레몬레이드';

  document.getElementById('show').appendChild(ulTag);
  ulTag.appendChild(liTag1);
  ulTag.appendChild(liTag2);
  ulTag.appendChild(liTag3);
});

//forEach 사용
document.addEventListener('DOMContentLoaded', function () {
  let menus = ['아이스아메리카노', '카페라떼', '레몬에이드'];

  let ulTag = document.createElement('ul');
  menus.forEach(menu => {
    let liTag = document.createElement('li');
    liTag.innerHTML = menu;
    ulTag.appendChild(liTag);
  });
  document.getElementById('show').appendChild(ulTag);
});

//for문 사용
document.addEventListener('DOMContentLoaded', function () {
  let menus = ['아이스아메리카노', '카페라떼', '레몬에이드'];

  let ulTag = document.createElement('ul');

  for (let i = 0; i < menus.length; i++) {
    let liTag = document.createElement('li');
    liTag.innerHTML = menus[i];
    ulTag.appendChild(liTag);
  };

  document.getElementById('show').appendChild(ulTag);

});

//for of 사용
document.addEventListener('DOMContentLoaded', function () {
  let menus = ['아이스아메리카노', '카페라떼', '레몬에이드'];

  let ulTag = document.createElement('ul');

  for (let menu of menus) {
    let liTag = document.createElement('li');
    liTag.innerHTML = menu;
    ulTag.appendChild(liTag);
  };

  document.getElementById('show').appendChild(ulTag);

});

//reduce 사용
document.addEventListener('DOMContentLoaded', function () {
  let menus = ['아이스아메리카노', '카페라떼', '레몬에이xm'];

  let result =  menus.reduce((accum, elem, idx) => {
    if (idx == 0) {
      accum += '<ul>';
    }

    accum += `<li> ${elem} </li>`;

    if (idx == menus.length - 1) {
      accum += '</ul>';
    }
    return accum;
  }, '');
  document.write(result);
});