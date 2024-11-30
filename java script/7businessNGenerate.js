// function generateBusinessName() {
//   // adjective list:
//   const adj1 = "Crazy";
//   // const adj2= elegent;
//   // const adj3= creative;

//   // shop name list:
//   // const shop1= bakery;
//   // const shop2= lab;
//   const shop1 = "Engine";

//   // additional word:
//   const add1 = "Hub";
//   // const add2= world;
//   // const add3= dream;

//   const businessname = `${adj1} ${shop1} ${add1}`;
//   return businessname;
// }
// console.log(generateBusinessName());
// console.log(generateBusinessName());
// another way decalare business name

const adjectives = "Amazing Beautiful Bright Creative Dynamic Elegant Fierce";
const shopNames = "ShopMart StoreWorks BazaarZone MarketPlace TradeHub GoodsWorld";
const additionalNames = "Co Enterprise LLC Studios Group Works Hub Network";

// Function to generate a random business name
function generateBusinessName() {
    const adjIndex = Math.floor(Math.random() * 6); // 6 adjectives
    const shopIndex = Math.floor(Math.random() * 6); // 6 shop names
    const addIndex = Math.floor(Math.random() * 6); // 6 additional names
    
    // Select random words from each category
    const randomAdj = adjectives.split(" ")[adjIndex];
    const randomShop = shopNames.split(" ")[shopIndex];
    const randomAdd = additionalNames.split(" ")[addIndex];
    
    // Combine them to form a business name
    return randomAdj + " " + randomShop + " " + randomAdd;
}

// Generate and display a random business name
const businessName = generateBusinessName();
console.log(businessName);


  