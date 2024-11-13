// let elec_products = ["mobile", "laptop", "tv"]; //200 memory reference

// let furniture = ["chair", "table"];

// elec_products.push("monitor"); // 2000
// console.log(elec_products);

// elec_products = [...elec_products, "apple ipad"]; // 3000

// console.log(elec_products);

// elec_products = [...elec_products, "monitor"];
// console.log(elec_products);

// let newproducts = elec_products.filter((item) => item !== "tv");
// elec_products = [...newproducts];

// let allProds = [...elec_products, ...furniture];
// console.log(allProds);

// // let copyData = elec_products;
// // elec_products.pop();
// // console.log(copyData);

// let actualcopy = [...elec_products];
// elec_products.pop();
// console.log(actualcopy);
// console.log(elec_products);

// elec_productss = {
//   name: "mobile",
//   brand: "apple Inc",
//   price: 50000,
//   rating: 4.5,
//   supplier: {
//     name: "xyz",
//     location: "mumbai",
//   },
// };

// let copy_data = { ...product }; // copy of the product
// product.price = 6000000;
// console.log(copy_data);

// product = { ...product, category: "electronics" };
// console.log(product);

let suppliers = {
  name: "mobile",
  supplier_name: "xyz",
  location: "mumbai",
};

// let alldetailss = {
//   ...product,
//   ...supplier,
// };

// console.log(alldetails);

// let elec_products = ["mobile", "laptop", "tv"]; //2000
// let furniture = ["chair", "table"];

// //elec_products.push("monitor") //2000

// //insert
// elec_products = [...elec_products, "monitor"]; //3000
// console.log(elec_products);

// //delete
// let newproducts = elec_productss.filter((item) => item !== "tv");
// elec_products = [...newproducts]; //8000

// let allprods = [...elec_products, ...furniture];
// console.log(allprods);

// /*let copy_elec=elec_products//2000 //copy_elec-->2000
// elec_products.pop()
// console.log(copy_elec)*/

// let actual_copy_elec = [...elec_products]; //4000
// elec_products.pop();
// console.log(actual_copy_elec);
// console.log(elec_products);

let product = {
  name: "mobile",
  brand: "apple",
  price: 50000,
  rating: 4.5,
}; //6000
// //copy
// let copy_product = { ...product }; //7000
// product.price = 60000;
// console.log(copy_product);
// //add new prop
// product = { ...product, category: "Electronics" };

// console.log(product);

// let supplier = {
//   suppliername: "xyz",
//   location: "mumbai",
// };

let alldetails = {
  ...product,
  ...supplier,
};

console.log(alldetails);

product = {
  ...product,
  price: 60000,
};

console.log(product);

function updateprice(prod, new_price) {
  let new_prod = { ...prod, price: new_price };
  return new_prod;
}

let updated_product = updateprice(product, 70000);
