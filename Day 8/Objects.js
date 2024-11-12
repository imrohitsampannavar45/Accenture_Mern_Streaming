// let product = {
//     name:"mobile",
//     brand:"apple Inc",
//     price:50000,
//     rating:4.5,
//     supplier:{
//         name: "xyz pvt ltd",
//         location:"mumbai"
//     },
//     comments: ["good", "great", "superb"],
//     title: function(){
//             return this.name+ " | "+ this.brand+" | "+this.price

//     }
// }

// console.log(product.name)
// console.log(product.brand)
// console.log(product.supplier.location)
// console.log(product.title())



// let user = {
//     firstname:"sachin",
//     lastname:"tendulkar",
//     fullname:function(){
//         return this.firstname+ " "+this.lastname
//     }
// }

// console.log(user.fullname())



// let user2 = {
//     firstname:"virat",
//     lastname:"kohli",
//     fullname:function(){
//         return this.firstname+ " "+this.lastname
//     }
// }
// console.log(user2.fullname())


let product={
    name:"mobile",
    brand:"apple",
    price:50000,
    rating:4.5,
    supplier:{
        name:"xyz pvt ltd",
        location:"mumbai"
    },
    comments:["good","great","super"],
    title:function(){
        return this.name+"|"+this.brand+"|"+this.price
    }
 
}
 
let prop="rating"
console.log(product.name)
console.log(product[prop])
console.log(product.supplier.location)
console.log(product.supplier["name"])
console.log(product.title())
 
 
let user1={
    firstname:"sachin",
    lastname:"tendulkar",
    fullname:function(){
        return this.firstname+" "+this.lastname
    }
}
 
console.log(user.fullname())
 
let user2={
    fname:"virat",
    lastname:"kholi",
    fullname:()=>{
        return this.firstname+" "+this.lastname//undefined
    }
}
