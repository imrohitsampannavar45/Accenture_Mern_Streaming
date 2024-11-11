const products = [ 'mobile', "monitor","laptop","TV","ipad"]

console.log(products.includes("laptop"));
console.log(products.indexOf("mobile"));


let product = products.find((item)=>item.startsWith("m"));
console.log(product)


let a = products.filter((item)=> item.startsWith("l"))
console.log(a)


let b= products.map((item)=>"*"+item+"*")
console.log(b)


let c =  products.filter((item)=>item.startsWith("a"));
console.log(c);

let d = products.map((item) => item.slice(0,3).toUpperCase() + item.slice(3))
console.log(d)

let e = products.map((item,index)=>{
if(index%2===0){
    return item.toUpperCase()
}else{
    return item
}
})
console.log(e)


products.forEach((item)=>{
    console.log(item.slice(0,3))
})

let result

products.forEach((item)=>{
    if(item.startsWith("m"))
    {
        result = item
    }
})

console.log(result)


// const products=["mobile","monitor","laptop","smart tv"]
 
// console.log(products.includes("mobile"))
// console.log(products.indexOf("Laptop"))
 
// let product=products.find((item)=>item.startsWith("m"))//finc first matched item
// /*
// mobile=(mobile)=>mobile.startsWith("l")-->false
// monitor=(monitor)=>monitor.startsWith("l")-->false
// laptop=(laptop)=>laptop.startswith("l")-->true-->laptop
// */
// console.log(product)
 
// let filtereditems=products.filter((item)=>item.startsWith("L"))//find all matched items
// console.log(filtereditems)
 
// let transformeditems=products.map((item)=>"*"+item+"*")//find all matched items
// console.log(transformeditems)
 
 
// let transformed_items=products.map((item)=>item.toUpperCase())//find all matched items
// console.log(transformed_items)
 
 
// let alt_items=products.map((item,index)=>{
//     if(index%2===0)
//     {
//         return item.toUpperCase()
//     }
//     else
//     {
//         return item
//     }
// })//find all matched items
// console.log(alt_items)
 
 
// products.forEach((item)=>{
//     console.log(item.slice(0,3))
// })
 
// let result
 
// products.forEach((item)=>{
//     if(item.startsWith("L"))
//     {
//         result=item
//     }
// })
 
// console.log(result)
