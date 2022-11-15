// When you create a variable you need to assign the type by using ":"
let age: number = 5
let username: string = "Berker"
let isActive: boolean = true
// any attribute is okay with anything that you assign
let data: any = "Hello" 
// Here "number[]" attribute shows the element inside of the array have to be number
let ids: number[] = [1,2,3,4,5]
// Here "any[]" attribute shows that the elemenst inside of the array can be anything
let arr: any[] = ["Hello", 08, true]

// TUPLE 

// tuple enables us to define type of every single element by default by script as you see below
let person: [number, string, boolean] = [34,"Hello", false]

// You can create tuples inside of array which means you can define types of elements of an array which is inside of the other array
let workers: [number, string][]

workers = [   
   [10, "Berker"],
   [11, "Kelesoglu"]
]

// UNIONS

// in Unions we use | to define types more than one that we wanted
let pid: string | number
pid = 12
pid = "Berker"

// ENUMS
 
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

console.log("dsfsd")