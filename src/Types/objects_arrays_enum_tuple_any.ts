const person
// : { // this is optional, TS implicitly does this
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number,string] // Tuple, restricts to 2 values (during assignment but not with push()), type checking

// } 
= { // Object
    name: "Aniket",
    age: 30,
    hobbies: ['Sports', 'Cooking'], // Array
    role: [2,'Admin']   //Tuple,    
}

enum Type{ADMIN, READ_ONLY, AUTHOR};
let anyTest: any[] = ['Cricket', 3, true];

console.log(person.name);
for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());  // TS internally assigns hobby as string, so string methods are available
}