//declaretion Function
let declaretionElement = document.querySelector(".declaretionFunction")
function logger1(a, b) {
    console.log(`Tổng 2 số là ${a + b}`)
    return 1;
}
console.log(`Hàm trả về giá trị là ${logger1(2, 2)}`)
//expression Function
const logger2 = function (a, b) {
    console.log(`Tích 2 số là ${a * b}`);
    return 2
};
console.log(`Hàm trả về giá trị là ${logger2(3, 3)}`)
//arrow Function
const logger3 = (a, b) => {
    console.log(`Hiệu 2 số là ${a - b}`)
    return 3
}
console.log(`Hàm trả về giá trị là ${logger3(3, 1)}`)

//Ví dụ về bind()
const person1 = {
    name: "Cường",
    sayHello: function () {
        console.log(`Hello, Tên tao là ${this.name}`);
    },
};
const person2 = { name: "Nam" }
const newSayHello = person1.sayHello.bind(person2);
newSayHello();
//Ví dụ về call()
const person3 = {
    name: "ngủ",
    toDo: function (date) {
        console.log(`${date}, tao đi ${this.name}`);
    },
};

person3.toDo.call({ name: "đá bóng" }, "Thứ 5");
//Ví dụ về apply()
const person4 = {
    name: "chạy bộ",
    toDo: function (date1,date2) {
        console.log(`${date1} và ${date2}, Tao đi ${this.name} `);
    },
};
const person9 = {name: "ngủ"}

person4.toDo.apply(person9, ["Thứ 7","Chủ nhật"]);
// Ví dụ về từ khóa "this"
const animal = {
    name: "Chó",
    legs: 4,
    test: function(){
        console.log(this)
    }
}
animal.test();