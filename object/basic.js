//object/basic.js

const member = {
  memberId: 'user1',
  memberName: 'Hong',
  getMemberName: function () {
    return `회원이름은 ${this.memberName}`;
  },
  setMemberName: function (name) {
    this.memberName = name;
  }
}

console.log(member.memberId);
member.setMemberName('Hwang'); //
console.log(member.getMemberName());
member.memberAge = 20; //object안에서만 속성을 추가하지 않고 밖에서도 속성을 추가하고 삭제할수도 있다
//object로 속성을 설정하면 똑같은 내용을 새로 계속 추가해야하므로 class를 생성해주는게 편하다
delete member.memberAge;
member['memberPoint'] = 1000;
console.log(member);

member.grade = function () {
  if (this.memberPoint > 500) { //여기서의 this는 object를 가르킴
    return 'gold'
  } else if (this.memberPoint > 1000) {
    return 'platinum'
  }
}
console.log(member.grade());

//클래스, construct함수 => object 생성
class Student {
  constructor(sno, sname) { //생성자
    this.sno = sno;
    this.sname = sname;
  }
  set mathScore(score) { //생성자에 선언되지 않은 속성값을 추가하고 싶을때 getter, setter
    this._mathScore = score; //_mathScore는 속성의 이름
  }
  get mathScore() {
    return this._mathScore; //_mathScore 속성값을 읽어오겠음
  }
  getSno() { //생성자에 선언된 속성값을 저장, 호출하고 싶을때 getter, setter
    return this.sno;
  }
  setSno(sno) {
    this.sno = sno;
  }
}

const s1 = new Student('1111', 'Hong');
const s2 = new Student('2222', 'Hwang');
console.log('학생번호 ' + s1.getSno());
s1.engScore = 80;
s1.mathScore = 90; //
console.log(s1.engScore);
console.log(s1.mathScore);
console.log(s1);


function Person(ssn, sname) {
  this.ssn = ssn;
  this.sname = sname
  this.getInfo = function () {
    return `주민번호 ${this.ssn}, 이름 ${this.sname}`;
  }
}
const p1 = new Person('951111-1111111', 'Hong');
const p2 = new Person('971111-2222222', 'Hwang');
const p3 = new Person('111111-3333333', 'Park');
console.log(p1.getInfo());
