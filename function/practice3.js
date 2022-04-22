//function/practice3.js

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

const persons = [person1, person2, person3];

//map은 리턴해주는 값을 새로운 배열에 담아줌
const newPersons = persons.map((val, idx) => {
  return val;
});
console.log(newPersons);

//클래스를 따로 만들지 않고 새로운 클래스를 선언해줌
const newPersons1 = persons.map((val, idx) => {

  let newObj = {}; //오브젝트 타입을 선언
  newObj.index = idx + 1; //오브젝트의 속성(필드)를 추가
  newObj.fName = val.fullName;
  newObj.age = val.age;
  newObj.height = val.height;

  return newObj; //return 구문이 없으면 [undefined, undefined, undefined] 을 반환
});
console.log(newPersons1);

//함수 정의문
function tableList(personAry) {
  document.write('<table border=1>');
  document.write('<tr><th>순번</th><th>이름</th><th>나이</th><th>키</th></tr>')
  for (let person of personAry) { //라인생성
    document.write('<tr>')
    for(let field in person) { //칼럼생성
    document.write(`<td> ${person[field]} </td>`)
    }
    document.write('</tr>')
  }
  document.write('</table>');
}
//함수 실행
tableList(newPersons1);