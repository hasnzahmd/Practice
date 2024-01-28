let age= 20;
    if(age < 30)
age += 10;
console.log(age);

let num = 123_456_789;
let course = "typescript";
let is_published = false;

function render(document: any){
    console.log(document);
    
}

let numbers: number[] = [];
numbers[0] = 1;
numbers[1] = 2;

console.log(numbers.forEach(n=>n.toFixed));

let user: [number, string] = [1, 'jhon'];

enum Size {small = 1 , medium, large}
const enum Size2 {small = 's' , medium = 'm', large = 'l'}
let size1: Size = Size.large;
let size2: Size2 = Size2.large
console.log(size1, size2);

function calculate(tax: number, amount = 30_000): number {
    if(amount < 50_000)
        return tax * 0.1;
    else 
        return tax * 0.2;
}

calculate(20);


type Employee = {
    readonly id: number, 
    name: string, 
    fax ?: any,
    date: (date: Date)  => void
}

let employee: Employee = {
    id : 1,
    name: 'ali',
    date: (date: Date) => {
        console.log(date);  
    }
}

employee.fax = '121'

console.log(employee);