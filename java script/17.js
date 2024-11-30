let url = "https://cat-fact.herokuapp.com/facts";

const factPara = document.querySelector(".fact");
const factButton = document.querySelector("#btn");

const getFacts = async () => {
    console.log("fetching data.....")
  let response = await fetch(url);//json format
  console.log(response);
  let data = await response.json();//.json data ko object me convert karta hai for redeable
//   console.log(data[2].text);
  factPara.innerText=data[3].text;

};

factButton.addEventListener("click", getFacts);
