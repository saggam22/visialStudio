//string/practice.js

let str1 = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur tenetur, ducimus animi, ipsa ab tempore officia at excepturi ratione hic atque? Libero quasi dolores officiis aspernatur asperiores possimus, rem temporibus!';
//단어의 길이가 10개 이상인 값을 골라내서 콤마로 구분하기
console.log(str1.split(' ').filter(val => val.length >= 10).join(','));