//object/practice.js

const jsonObj =
  `[{"id":1,"first_name":"Amil","last_name":"Speaks","email":"aspeaks0@senate.gov","gender":"Female","ip_address":"200.98.119.38"},
{"id":2,"first_name":"Niles","last_name":"Lighton","email":"nlighton1@homestead.com","gender":"Male","ip_address":"36.128.98.236"},
{"id":3,"first_name":"Kort","last_name":"Bauman","email":"kbauman2@1688.com","gender":"Male","ip_address":"33.177.62.165"},
{"id":4,"first_name":"Errick","last_name":"O'Neal","email":"eoneal3@lycos.com","gender":"Male","ip_address":"127.208.123.240"},
{"id":5,"first_name":"Haskel","last_name":"Fold","email":"hfold4@amazonaws.com","gender":"Male","ip_address":"40.219.46.113"},
{"id":6,"first_name":"Rici","last_name":"Gradwell","email":"rgradwell5@diigo.com","gender":"Female","ip_address":"175.65.131.211"},
{"id":7,"first_name":"Catlee","last_name":"Jilliss","email":"cjilliss6@cpanel.net","gender":"Female","ip_address":"16.157.213.227"},
{"id":8,"first_name":"Gretchen","last_name":"Hook","email":"ghook7@cornell.edu","gender":"Polygender","ip_address":"224.55.57.218"},
{"id":9,"first_name":"Page","last_name":"Harrison","email":"pharrison8@goodreads.com","gender":"Female","ip_address":"230.204.119.73"},
{"id":10,"first_name":"Allin","last_name":"Warr","email":"awarr9@loc.gov","gender":"Male","ip_address":"51.234.107.138"},
{"id":11,"first_name":"Jory","last_name":"Dransfield","email":"jdransfielda@etsy.com","gender":"Male","ip_address":"103.86.194.171"},
{"id":12,"first_name":"Cristine","last_name":"Tayspell","email":"ctayspellb@unc.edu","gender":"Female","ip_address":"214.161.66.55"},
{"id":13,"first_name":"Kasper","last_name":"Tomaskov","email":"ktomaskovc@indiegogo.com","gender":"Bigender","ip_address":"238.26.119.75"},
{"id":14,"first_name":"Shoshana","last_name":"Belone","email":"sbeloned@sun.com","gender":"Genderfluid","ip_address":"26.167.93.185"},
{"id":15,"first_name":"Amery","last_name":"Field","email":"afielde@yahoo.com","gender":"Male","ip_address":"119.69.233.119"}]`

//이전에는 텍스트형식으로 문자열을 받아올때 {<id>15</id><first_name>"Amery"</first_name>} 으로 받아왔는데 데이터낭비가 심함
//따라서 현재는 {"id":15,"first_name":"Amery"} json형식으로 받아와서 데이터의 낭비를 줄이고 JSON.parse를 사용하면 js타입으로 변환가능

//json 문자열 => javascript 오브젝트 변경
const objAry = JSON.parse(jsonObj);
console.log(objAry);

let fields = ['id', 'first_name', 'last_name', 'email'];

function showTable(ary) {
  let tableTag = "";

  tableTag += '<table border=1>';
  tableTag += createHead();
  tableTag += createBody(ary);
  tableTag += '</table>';

  document.write(tableTag);

  function createHead() {
    let headTag = "";
    headTag += '<thead><tr>';
    fields.forEach(function (val) {
      headTag += `<th>${val}</th>`;
    });
    headTag += '</tr></thead>';
    console.log(headTag);
    return headTag;
  }

  function createBody(ary) {
    let bodyTag = "";
    bodyTag += '<tbody>';
    ary.forEach((val, idx) => {
      bodyTag += `<tr style="background:${idx%2==0?"yellow":"green"};">`;
      fields.forEach((field) => {
        bodyTag += `<td> ${val[field]} </td>`;
      });
      bodyTag += '</tr>';
    });
    bodyTag += '</tbody>';
    return bodyTag;
  }
}

console.log(showTable(objAry));