let product 

console.log(product?product.name:"")




 product = {
     name:"mobile",
   brand:"apple Inc",
    price:50000,
     rating:4.5,
     supplier:{
        name:"xyz",
        location:"mumbai"
     }

}
// console.log(
// product?
// product.supplier?product.supplier.location:undefined
// :undefined
// )

// console.log(product&&product.supplier&&product.supplier.location)

console.log(product?.supplier?.location)