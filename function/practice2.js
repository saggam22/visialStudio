//function/practice2.js

//오브젝트(자바에서는 인스턴스) : 참조타입(저장할 때 값이 아닌 주소값을 저장한 후 참조한다)
const person1 = {
  fullName: 'Hong',
  age: 20,
  height: 175.3
}
const person2 = {
  fullName: 'Hwang',
  age: 22,
  height: 178.4
}
const person3 = {
  fullName: 'park',
  age: 25,
  height: 165.3
}

const persons = [person1, person2, person3]; //자바에서는 배열을 담을 때 {} 사용하지만 스크립트에서는 {}오브젝트 선언이다

let avg = 0,
  sum = 0;
for (let person of persons) {
  sum += person.age;
}
avg = sum / persons.length;
console.log(`평균나이 : ${Math.round(avg)}`);

avg = 0, sum = 0;
let avgAgeFnc = function (val) {
  sum += val.age;
};
let avgHeightFnc = (val) => {
  sum += val.height;
}
persons.forEach(avgHeightFnc); //함수를 각각 저장해두고 호출만 하면 된다. 평균 나이/ 평균키 등등
avg = sum / persons.length;
console.log(`평균키 : ${avg}`);

sum = 0;
persons.forEach(avgAgeFnc);
avg = sum / persons.length;
console.log(`평균나이 : ${avg.toFixed(4)}`);

let tag = '';
//* 이름, 나이, 키
let allperson = (val, idx) => {
  if (idx == 0) {
    tag += '<ul>';
  }
  tag += `<li> ${val.fullName}, ${val.age}, ${val.height} </li>`
  if (idx == persons.length - 1) {
    tag += '</ul>'
  }
}

let over170 = (val, idx) => {
  if (idx == 0) {
    tag += '<ul>'
  }
  if (val.height >= 170) {
    tag += `<li> ${val.fullName}, ${val.age}, ${val.height} </li>`
  }
  if (idx == persons.length - 1) {
    tag += '</ul>'
  }
}
persons.forEach(allperson);
console.log(tag);
document.write(tag);

tag='';
persons.forEach(over170);
console.log(tag);
document.write(tag);