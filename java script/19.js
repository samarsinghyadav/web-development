// let obj={
//     a: 1,
//     b: "Samar"
// }
// console.log(obj);

// let animal={
//     eats:true
// };
// let rabbit={
//     jumps:true
// };
// rabbit.__proto__ = animal;//set rabbit.[[prototype]]=animal

 class Animal {
    constructor(name) {
        this.name=name
        console.log("Object is created....")
        
    }
    eats(){
        console.log("kha rha hoon")
    }
    jumps(){
        console.log("kood rha hooon")
    }
 }
class Lion extends Animal{
    constructor(name) {
         super(name)
        console.log("Object is created...he is a Lion")
        
}
}

 let a=new Animal("Bunny"); 
 console.log(a)

 let L=new Lion("Shera")
 console.log(L)