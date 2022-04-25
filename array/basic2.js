//array/basic1.js

//reduce(), map() => 새로운 배열, filter() => 리턴값이 참일 경우에 새로운 배열
//reduce() => 누적값 구하기/ 결과값이 지정하는 값으로 string, number, 배열

const numbers = [23, 4, 77, 51, 63];

//배열요소 누적합
let result = numbers.reduce(function (accum, elem, ind, ary) {
  console.log(accum, elem, ind, ary); //0 23 0 배열요소
  return accum += elem;
}, 0);
//초기값이 주어지면 초기값부터 계산 / 안주어지면 첫번째 요소부터 계산
console.log(result);

//배열요소의 *2 => 새로운 배열
result = numbers.reduce((accum, elem) => {
  accum.push(elem * 2);
  return accum;
}, []);
console.log(result);

//filter : 50보다 작은 수 걸러내기
result = numbers.reduce((accum, elem) => {
  if (elem >= 50)
    accum.push(elem);
  return accum; //반환되는 값은 다음 순번의 초기값(accum);
}, []);
console.log(result);

//reduce는 기능 자체만 잘 구현하면 map과 filter 대신 사용할 수 있음