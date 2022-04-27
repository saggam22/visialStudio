//string/practice2.js

let sso = ['970101-1234567', '970101 4234568', '9701011334569', '970101/4234560'];

//if 문으로 표현하기
function checkGender(ssn) {
  let result = ssn.replace(/\D/, '').charAt(6);
  if (result == 2 || result == 4) {
    return '여자';
  } else if (result == 1 || result == 3)
    return '남자';
}

let result = checkGender('970101 2234567');
console.log(result);

//``안의 삼항연산자로 표현해보기
function checkGender1(ssn) {
  let result = `${ssn.replace(/\D/,'').charAt(6)==2?'여자':'남자'}`;
  return result;
}

let result1 = checkGender1('970101 2334567');
console.log(result);

//배열의 값을 확인해보기
sso.forEach(val => {
  let result = checkGender(val);
  console.log(result);
});