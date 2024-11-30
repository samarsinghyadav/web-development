// this is synchoronus 
// let firstPromise= new Promise((resolve, reject)=>{
//     console.log("samar yadav");
//     reject (new Error("server down we solve it please wait "));
//     });

// this is the asynchoronus

// let firstPromise= new Promise((resolve, reject)=>{
// setTimeout(function sayMyName(){
//     console.log("samar aingh yadav")
// }
// ,10000);
// return 1;
// });


//callbacks hell
function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("data", dataId);
        resolve("success");
        if (getNextData) {
          getNextData();
        }
      }, 2000);
    });
  }


callbackhell
getData(1, () => {
  console.log("getiing data2....");

  getData(2, () => {
    console.log("getiing data3....");
    getData(3, () => {
      console.log("getiing data4....");
      getData(4, () => {
        console.log("getiing data5....");
        getData(5, () => {
          //   console.log("getiing data6....");
        });
      });
    });
  });
});


//promise
let Promise1=new Promise((resolve,reject)=>{
if(success=true){
    resolve("promise fullfilled");

}
else{
    reject("promise rejected")
}
});

// use then(then use for resolve) and catch(use for reject) 

// Promise1.then((message)=>{
//     console.log("then ka message is " +message);
// }).catch((error)=>{
//     console.log("erroe: "+error);
// }

// )

// then pomise chaining

// Promise1.then((message)=>{
//         console.log("first msg: " +message);
//         return "promise fullfilled second message";
//  }).then ((message)=>{
//         console.log("second msg: "+message);
//         return "promise fullfilled third message";
//     }).then((message)=>{
//         console.log("third msg: "+message);
        
//     }
//     ).finally((message)=>{
//         console.log("mai to finnaly hu mai to hamesa chulga chahe suucces=true ho ya false");
//     })


// many promise then use promise.all
let promise1=new Promise((resolve, reject) => {
    setTimeout(resolve,1000,"first")
})
let promise2=new Promise((resolve, reject) => {
    setTimeout(resolve,2000,"second")
})
let promise3=new Promise((resolve, reject) => {
    setTimeout(resolve,3000,"third")
})
let promise4=new Promise((resolve, reject) => {
    setTimeout(reject,4000," server down")
})
// jab uper wale promise resolve ho jayege tab ye promise all me pass ho jayege
Promise.all([promise1,promise2,promise3,promise4])
//then resolve value ko mark karta hai
.then((value)=>{
    console.log("value")
    //catch reject value ko mark karta hai
}).catch((error)=>{
    console.error("error: " +error)
})



