// async-await
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success"); // success ko bhi print karana chahate hai to .then ka use karna hoga
    }, 2000);
  });
}
// async-awaint
async function getAllData() {
  console.log("fetching data1...");
  await getData(1);
  console.log("fetching data2....");
  await getData(2);
  console.log("fetching data3,,,");
  await getData(3);
  console.log("fetching data4....");
  await getData(4);
  console.log("fetching data5....");
  await getData(5);
}

// getData().then((res)=>{   //ye resolve ko print kar dega
//   console.log(res);
// })

 
