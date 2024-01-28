let age= 20;
    if(age < 30)
age += 10;
console.log(age);

let num = 123_456_789;
let course = "typescript";
let is_published = false;

//any type
function render(document: any){
    console.log(document);
    
}

//arrays 
let numbers: number[] = [];
numbers[0] = 1;
numbers[1] = 2;

console.log(numbers.forEach(n=>n.toFixed));

//tuples
let user: [number, string] = [1, 'jhon'];

//enums
enum Size {small = 1 , medium, large}
const enum Size2 {small = 's' , medium = 'm', large = 'l'}
let size1: Size = Size.large;
let size2: Size2 = Size2.large
console.log(size1, size2);

//functions
function calculate(tax: number, amount = 30_000): number {
    if(amount < 50_000)
        return tax * 0.1;
    else 
        return tax * 0.2;
}

calculate(20);

//objects and type alias
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

//union types
function kgToLbs(weight: number | string): number {
    if(typeof weight === "string"){
        let value = parseInt(weight);
        if(isNaN(value)) throw new Error("Invalid input");
        return value * 2.2;
    }else{
        return weight * 2.2;
    }
}
console.log(kgToLbs('10'),kgToLbs(60));

//intersection types
type Dragabble = {
    drag: ()=> void
}
type Resizeable = {
    resize: ()=> void
}

type UIWidget = Dragabble & Resizeable;

let textBox: UIWidget = {
    drag: ()=>{console.log('dragging')},
    resize: ()=>{console.log('resizing');}
}
textBox.drag();
textBox.resize();

//literal types
type Quantity = 50|70|80;
const quantity: Quantity = 50;

type Metric = 'cm' | 'inch';
const metricSize: Metric = 'cm'
