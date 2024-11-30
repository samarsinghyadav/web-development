// function getData(dataId){
//     setTimeout(() => {
//         console.log("data",dataId);
//     }, 2000);
// }
// getData(1)

// let promise = new Promise((resolve, reject) => {
//   console.log("i am a promise");
//   let a = resolve("i am a resolve promise");
// });

function getData(dataId, getNextData) {//[romoise me getnextdata ka koi worknhai hai]
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

//callbackhell
// getData(1, () => {
//   console.log("getiing data2....");

//   getData(2, () => {
//     console.log("getiing data3....");
//     getData(3, () => {
//       console.log("getiing data4....");
//       getData(4, () => {
//         console.log("getiing data5....");
//         getData(5, () => {
//           //   console.log("getiing data6....");
//         });
//       });
//     });
//   });
// });

//promise chain
console.log("fetching data1...");
getData(1)
  .then((res) => {
    console.log("fetching data2...");
    return getData(2);
  })
  .then((res) => {
    console.log("fetching data2...");
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });

// then use
// function asyncfunc1() {//it is a api
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data1");
//       resolve("success");
//     }, 4000);
//   });
// }
// console.log("fetching details1....");
// let p1 = asyncfunc1();
// p1.then((res) => {
//   console.log("data " + res);
// });
