product = {
  name: "mobile",
  brand: "apple Inc",
  price: 50000,
  rating: 4.5,
  supplier: {
    name: "xyz pvt ltd",
    location: "mumbai",
  },
};

let { brand, name } = product;
console.log(name);
console.log(brand);

let { name: pname, age } = product;
console.log(pname);

let { rating, ...remattrbs } = product;
console.log(rating);
console.log(remattrbs);

let {
  supplier: { location },
} = product;
console.log(location);

function productTitle(name, brand) {
  console.log(name + " | " + brand);
}
productTitle(product.brand, product.name);
productTitle(product);
