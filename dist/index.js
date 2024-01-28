"use strict";
let age = 20;
if (age < 30)
    age += 10;
console.log(age);
let num = 123456789;
let course = "typescript";
let is_published = false;
function render(document) {
    console.log(document);
}
let numbers = [];
numbers[0] = 1;
numbers[1] = 2;
console.log(numbers.forEach(n => n.toFixed));
let user = [1, 'jhon'];
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
let size1 = Size.large;
let size2 = "l";
console.log(size1, size2);
function calculate(tax, amount = 30000) {
    if (amount < 50000)
        return tax * 0.1;
    else
        return tax * 0.2;
}
calculate(20);
let employee = {
    id: 1,
    name: 'ali',
    date: (date) => {
        console.log(date);
    }
};
employee.fax = '121';
console.log(employee);
//# sourceMappingURL=index.js.map