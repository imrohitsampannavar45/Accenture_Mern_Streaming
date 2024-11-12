const products = ["mobile","monitor","laptop", "smart tv"]


// let p1 = products[0]
// let p2 = products[1]


let [p1,p2]= products
console.log(p1)
console.log(p2)


let [p_1,,p_3] = products
console.log(p_1)
console.log(p_3)


let [prod1,...prods] = products
console.log(prod1)
console.log(prods)

function arithmetic(n1,n2){

   return  [n1+n2,n1-n2,n1*n2,n1/n2]
}




let [sum,sub] = arithmetic(10,20)
console.log(sum)
console.log(sub)