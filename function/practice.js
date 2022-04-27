//practice.js

const numbers = [23, 45, 32, 55, 34, 72];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0)
    sum += numbers[i];
}
console.log('합' + sum);

sum = 0;
for (let num of numbers) {
  if (num % 2 == 0)
    sum += num;
}
console.log('합' + sum);

sum = 0;
//for문을 활용하지 않아도 값을 가져올 수 있음
//함수표현식
let evenSum = (param) => {
  if (param % 2 == 0) {
    sum += param;
  }
};
numbers.forEach(evenSum); //또는

sum = 0;
numbers.forEach((param) => {
  if (param % 2 == 0) {
    sum += param;
  }
});
console.log('합' + sum);

numbers.forEach((param, inx) => {
  console.log(param, inx);
});

numbers.forEach((param) => { //홀수의 합 구하기
  if (param % 2 == 1)
    sum += param
});
console.log('합' + sum);