// let a:number;
// let b="hey"
// let variable:string |number;
// variable="efs"
// // variable="gyga"
// // variable=7
// function abcd(variable:string |number):string{
//     if(typeof variable ==="number"){
//         variable.toFixed(2)
//     }else if(typeof variable==="string"){
//         variable.toLocaleLowerCase()
//     }
//     return "2"
// }
// abcd(12)
// abcd("kjsghj")
// type classmates={
//     section:string
// }
// type student={
//     name:string
// }
// type classmatesInstudent= classmates & student;
// let a:classmatesInstudent= {
//     section:"kjasjh",
//     name:"siddharth"
// }
var Pendrive = /** @class */ (function () {
    function Pendrive(name) {
        this.company = name;
        console.log(this.company);
    }
    return Pendrive;
}());
var p1 = new Pendrive("hp");
// // we can do 
// class Pendrive {
//   constructor(public name: string) {
//     this.name = name;
//   }
// }
{ /*
    
                                                    Notes
    
Type inference : the ability of typescript to automatically detects the type of variable or expression based on assign value

never type: the type that represents value that never occurs it means the funtion has:
        > never returns,
        > unreachable code,
        > always throws an error.


type in TypeScript is used to create custom types that define a structure with keys (property names) and their corresponding value types.

Intersection types allow you to combine multiple types into one.

type aliases: the way to create custom names for any type including primitive types, objects, functions, union , array  etc
ex-   type userName=string;


An interface is used to define the shape of an object, including:
        >property names
        >their types
        >optional or readonly fields
        >function types (methods)




*/
}
