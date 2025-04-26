let person = {
    name: "김멋사",
    age: 13,
    pet: "rabbit",
};

person.gender = "남성";

person.name = "박멋사";

delete person.age;

console.log(person);