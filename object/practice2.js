//object/practice2.js
//달력만들기

let year = 2022;
let month = 4;

showCanlendar(2022, 4);

function showCanlendar(year, month) {
  let firstDate = getFirstDay(year, month);
  let lastDate = getLastDate(year, month);

  document.write(`<h3>${month} 월</h3>`)
  document.write('<table border=1>')
  showInfo();
  for (let i = 0; i < firstDate; i++) {
    document.write(`<td> </td>`);
  }
  for (let i = 1; i <= lastDate; i++) {
    if((i + firstDate) % 7 == 1) {
      document.write(`<td style="background:#ddd; color:red;"> ${i} </td>`);
    } else if((i + firstDate) % 7 == 0) {
      document.write(`<td style="background:#ddd; color:blue;"> ${i} </td>`);
      document.write('</tr><tr>');
    } else {
      document.write(`<td> ${i} </td>`);
    }
  }
  document.write('</tr></table>')

  function getLastDate(year, month) {
    //말일 정보를 가져오는 함수
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 31;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      case 2:
        return 28;
    }
  }

  function getFirstDay(year, month) {
    switch (month) {
      case 1:
      case 10:
        return 6;
      case 2:
      case 3:
      case 11:
        return 2;
      case 4:
      case 7:
        return 5;
      case 5:
        return 0;
      case 6:
        return 3;
      case 8:
        return 1;
      case 9:
      case 12:
        return 4;
    }
  }

  function showInfo() {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    document.write(`<tr>`);
    days.forEach((val) => {
      document.write(`<th style="background:black; color:white">${val}</th>`);
    });
    document.write('</tr><tr>');
  }
}