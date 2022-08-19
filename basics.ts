//Primitives: number, string, boolean
//More complex: arrays, objects
//Function types, parameters

//Primitives

let age: number;

age = 12; 

let userName: string;

userName = 'Edo';

let isInstructor: boolean;

isInstructor = true;

//More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

let person;

person = {
  name: 'Max',
  age: 31
}

//Type inference

let course = 'React the complete guide';

//course = 12341;

//Union types

// let course: string | number = 'React';

// course = 12345;

let userNickname: string | string[] = 'Edo';

// Function and function types

function add(a: number, b: number){
  return a + b;
}

function printOutput(value: any){
  console.log(value);
}


//Generics

function insertAtBeginning(array: any, value: any){
  const newArray = [value, ...array];
  return newArray;
}


export{}