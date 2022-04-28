//dom2/dom1.js

let data = [{studNo:101, studName:'조수윤', engScore:90, korScore:80},
{studNo:102, studName:'황진준', engScore:88, korScore:91},
{studNo:103, studName:'권가회', engScore:92, korScore:89},
{studNo:104, studName:'유해종', engScore:92, korScore:83}];

//초기화
let list = document.getElementById('list'); //tboby에 해당

data.forEach((elem) => {
  list.appendChild(makeTr(elem));
});

//변경버튼에 이벤트 설정(값을 하나씩 설정)
let chageBtn = document.querySelector('input[type="button"]');
chageBtn.addEventListener('click', function(e) {
  //대상 찾아오도록
  let targetTr = document.querySelectorAll('#list>tr');
  console.log(targetTr);
  let sno = document.getElementById('sno').value;
  let sname = document.getElementById('sname').value;
  let eng = document.getElementById('eng').value;
  let kor = document.getElementById('kor').value;
  
  targetTr.forEach(function (tr) {
    if(tr.children[0].innerHTML == sno) {
      tr.children[1].innerHTML = sname; //이름 변경
      tr.children[2].innerHTML = eng;
      tr.children[3].innerHTML = kor;
    }
  });
});

//변경버튼에 이벤트 설정(forEach)
//function chageCallBack1(e) {
// chageBtn.addEventListener('click', function(e) {
//   e.preventDefault(); //기본기능 차단(페이지 넘어가는 기능을 차단)

//   let fields = ['sname', 'eng', 'kor'];

//     let sno = document.getElementById('sno').value;
//     let result = '';
//     fields.forEach((field) => {
//       let check = document.getElementById(field).value;
//       if(!check || !sno) {
//         result = 'false';
//         return result;
//       }
//     });
    
//     if (result == 'false') {
//     alert(`필수 값을 입력하세요`);
//     } else {
//     fields.forEach((field, idx) => {
//         let searchTr = document.getElementById(`s_${sno}`);
//         searchTr.children[idx+1].innerHTML = document.getElementById(field).value;
//       });
//     }
// });

//변경버튼에 이벤트 설정(값을 대입) : 눈에 쉽게 보이고 확실한 코드이므로 forEach보다는 값을 대입하는 것을 사용하는 것을 권장
// chageBtn.addEventListener('click', function(e) {
//   e.preventDefault();
  
//   let sno = document.getElementById('sno').value;
//   let sname = document.getElementById('sname').value;
//   let eng = document.getElementById('eng').value;
//   let kor = document.getElementById('kor').value;

//   if(!(sno && sname && eng && kor)) {
//     alert('필수값을 입력하세요');
//     return;
//   }

//   let searchTr = document.getElementById(`s_${sno}`);
//   searchTr.children[1].innerHTML = sname;
//   searchTr.children[2].innerHTML = eng;
//   searchTr.children[3].innerHTML = kor;

// });

//추가버튼 이벤트
let addBtn = document.querySelector('input[type="submit"]');
addBtn.addEventListener('click', function(e) {
  e.preventDefault();
  addStud = {};
  let studNo = document.getElementById('sno').value
  let studName = document.getElementById('sname').value
  let engScore = document.getElementById('eng').value
  let korScore = document.getElementById('kor').value

  if(!studNo || !studName || !engScore || !korScore) {
    alert('필수값을 입력하세요')
    return;
  }
  
  addStud.studNo = studNo;
  addStud.studName = studName;
  addStud.engScore = engScore;
  addStud.korScore = korScore;

  list.appendChild(makeTr(addStud));

});

//tr만들기
function makeTr(student) {
  let tr = document.createElement('tr');
  tr.setAttribute('id', 's_'+student.studNo); //유니크한 id값을 만들어주기 위해 문자를 추가

  //클릭시 input value 넣는 이벤트
  tr.addEventListener('click', function(e) { //버튼을 누르면 tr과 button의 이벤트 같이 실행 => 이벤트캡쳐링
    //이벤트캡쳐링 : target element의 최상위 부모(body)부터 target element까지 순차적으로 내려오면서 이벤트가 전달되는 방식
    //반대되는 개념은 이벤트버블링 :이벤트가 발생한 target element부터 최상위 부모까지 순차적으로 올라가면서 이벤트가 전달되는 방식
    //e.stopPropagation(); //이벤트 전파 차단
    console.log(this); //<tr>...<tr> 으로 출력
    console.log(e.target); //<td>값</td> 으로 출력(하위요소를 찾아감)
    
    console.log(this.children[0].innerHTML);
    document.getElementById('sno').value = this.children[0].innerHTML;
    document.getElementById('sname').value = this.children[1].innerHTML;
    document.getElementById('eng').value = this.children[2].innerHTML;
    document.getElementById('kor').value = this.children[3].innerHTML;

  }, false); //true: 상위 -> 하위(Capturing 방식) / false: 하위 -> 상위 (기본값 / Bubling 방식)

  //테이블 내용 넣기(td생성)
  for (let field in student) { //student.studNo == student['studNo']
    let td = document.createElement('td');
    td.innerHTML = student[field];
    tr.appendChild(td);
  }

  //버튼 : 삭제 이벤트
    let btn = document.createElement('button');
    btn.innerHTML = '삭제';
    btn.addEventListener('click', function(e) {
      e.stopPropagation(); //이벤트 전파 차단
      console.log(e.target); //<button>삭제</button> 으로 출력(하위요소를 찾아감)
      e.target.parentElement.parentElement.remove();
    }, false);
    let td = document.createElement('td');
    td.appendChild(btn);
    tr.appendChild(td);

  return tr;
}