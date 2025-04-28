// 이름은 김멋사, 나이는 13세, 반려동물은 토끼인 사람의 person 객체를 만들어라. 
let person = {
    name: "김멋사",
    age: 13,
    pet: "토끼"
};
// 이 객체에 성별 프로퍼티를 추가해라. 
person.gender = "여성"; 
// 이름 프로퍼티를 박멋사로 수정해라. 
person.name = "박멋사";
// 나이 프로퍼티를 삭제해라.
delete person.age;
// person 객체를 콘솔에 출력해라.
console.log(person);