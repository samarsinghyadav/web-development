 async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 2000);
    })

}
//imeddetly invoked ho jayaga
(async function main() {
    

//  let a=await sleep()
// console.log(a)
// let b=await sleep()
// console.log(b) 

//x=2,y=5asiign karega baki ko rest ek array print karega
// let [x,y, ...rest]=[2,5,7,8,9]
// console.log(x,y,rest)

//yadi mujhe 1st wale objse a,b ki value nilalna hai tab hum a,b me curly{} ka use karege aur use us obj ke equal kar dege
// let obj={
//     a:"Samar",
//     b:4,
//     c:5,
// }
// let {a,b}=obj;
// console.log(a,b)
//spred operater
// let arr=[2,4,5,6]
// console.log((arr[0]+arr[1]+arr[2]+arr[3]))
// console.log(sum(...arr))//spred operater arr ko sum kardega 

})();
