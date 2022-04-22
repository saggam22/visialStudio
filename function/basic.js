//function/basic.js

//1. 함수 선언식으로 정의
function sum(num1, num2) {
  console.log(num1, num2);
  return num1 + num2; //리턴값이 있으면 결과값을 받겠다는 뜻
}
let result = sum(10, 20); //매개값을 지정해주지 않으면 undefined 상태
console.log('결과는 ' + result); //리턴을 해주지 않으면 uundefined

//2. 함수 표현식으로 정의
let myfnc = function (val1, val2) {
  var myVal = 10;
  return val1 + val2 + myVal;
}
console.log(typeof myfnc, myfnc);
result = myfnc(10, 20);
console.log(result);

// let sum = myfnc; 이미 사용된 식별자라고 에러발생 
//functiond이라는 함수의 이름이 sum인데 function sum() 과 let sum = function() 은 같으므로!!

let mysum = myfnc; //myfnc가 function이므로 mysum의 타입도 function이 된다
result = mysum(20, 30);
console.log(result);

const person = {
  fullName: 'Hong',
  age: 20,
  height: 175.3
}
const person1 = {
  fullName: 'Hwang',
  age: 22,
  height: 178.4
}
const person2 = {
  fullName: 'park',
  age: 25,
  height: 165.3
}

//함수표현식 myinfo.
let myinfo = function (obj) {
  var info = `${obj.fullName}이고 ${obj.age}살이고 키는 ${obj.height}입니다.`;
  return info;
}

result = myinfo(person);
console.log(result);

//배열을 활용해서 각각의 요소들 출력
const persons = [person, person1, person2];
for (let person of persons) {
  let result = myinfo(person);
  console.log(result);
}
console.clear();

//자바스크립트에서 문자열, 숫자, boolean, 배열 => 매개값으로 사용
//함수를 매개변수로 사용가능

//forEach : 배열에 정의된 갯수만큼 함수의 기능을 실행하라는 메소드
persons.forEach(function (value, index, array) {
  console.log(value, index, array);
});

let funcParam = function (value, index, array) {
  console.log(myinfo(value));
};
persons.forEach(funcParam); //메소드의 매개값으로 활용되는 함수 => 콜백함수

let funcParam1 = (value, index, array) => { //화살표함수(매개변수값을 받아서 이 블럭을 실행하겠습니다)
  console.log(myinfo(value));
};
persons.forEach(funcParam1);