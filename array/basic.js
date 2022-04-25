// array.basic.js

//배열선언 : [], new Array();
let arr = [1, 2];
let newAray = [3, 4, 5, 6];

//추가 : push:마지막 위치, unshift:첫번째 위치
arr.push(3);
arr.unshift(0);
console.log(arr.toString());

//제거 : pop():마지막 위치, shift():첫번째 위치
arr.pop();
arr.shift();
console.log(arr.toString());

//forEach
newAray.forEach(elem => {
  // arr.push(elem);
  arr.unshift(elem);
});
console.log(arr.toString()); //6,5,4,3,1,2

arr.pop(); //6,5,4,3,1
arr.pop(); //6,5,4,3
arr.shift(); //5,4,3
console.log(arr.toString());

//splice(위치, 크기, 대체값) : 추가, 수정, 삭제
arr.splice(1, 2, 8, 9); //1번 자리에서 2의 크기를 8,9로 대체한다 즉 4와 3을 8과 9로 바꿈
console.log(arr.toString());

newAray.forEach(elem => {
  arr.splice(1, 1, elem);
})
console.log(arr.toString());

let names = [];
let anonym = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur tenetur, ducimus animi, ipsa ab tempore officia at excepturi ratione hic atque? Libero quasi dolores officiis aspernatur asperiores possimus, rem temporibus!';
anonym.split(' ').forEach(elem => {
  names.push(elem)
});
console.log(names.toString());
console.log(names); //배열

//forEach() : 반환 없음
//map() : 각 요소 => mapping 작업(다른 형태 반환), callback 함수를 각각의 요소에 대해 한번씩 순서대로 불러 그 함수의 반환값으로 새로운 배열을 생성
//fitter() : return 조건을 만족하는 값 반환, 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환

let result = names.map(function (elem) { //새로운 배열
  return elem.toUpperCase();
});
console.log(result);

result = result.filter(function (elem) {
  return elem.length >= 10;
});
console.log(result);

result = names.map(elem => elem.toUpperCase())
  .filter(elem => elem.length >= 10); //chain rules
console.log(result);

//내용 추가해봄
var testArray = [0, 1, 2, 3, 4, 5];
console.log(testArray.filter(function (c) {
  return c <= 2;
})); //[0, 1, 2]
console.log(testArray.map(function (c) {
  return c <= 2
})); //[true, true, true, false, false, false]
//map의 콜백함수는 산술된 인자를 받아 배열을 만드는 역할함. 그 조건식의 산술 결과인 "불린값을 리턴"해 배열을 만들게 됨
//filter의 콜백 함수는 리턴값의 불린값이 true인 "값"만 가지고 배열을 만드는 역할은 한다.

console.log(testArray.filter(function (c) {
  return c * 2;
})); // [1, 2, 3, 4, 5]
console.log(testArray.map(function (c) {
  return c * 2
})); // [0, 2, 4, 6, 8, 10]
//map은 산술된 값이 있으면 그 값을 리턴함
//filter은 c * 2를 산술이 아닌 논리로 본다. c * 2는 뭘해도 참(이때 0은 fasle가 되므로 결과값에 출력x)