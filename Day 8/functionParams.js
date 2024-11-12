// function discount(price,tax,per=0.05) {
//     let total = price-(price*per)+(price*tax)
//     return total
// }
// console.log(discount(100)) //Nan tax is not passed and per
// console.log(discount(100,0.1)) //Nan tax is not passed
// console.log(discount(100,0.1,0.03))


// function add(nums){
//     return 
// }
// console.log(add(10,20,30))

// function add(n1,...nums)
// {
//     let sum = 0
// for(let i =0; i<nums.length; i++){
//     sum = sum +nums[i]
// }
// console.log(sum)
// }
// add(10)
// add(10,20);
// add(10,20,30);
// add(10,20,30,40)


//1)


function fullname(firstname, lastname, middlename= "-"){
    return firstname+ " "+middlename+" "+lastname
}
console.log(fullname("Sachin", "Tendulkar"))
console.log(fullname("Rohit","Vittal", "Sampannavar"))




// 2)

function mul(n2, ...nums) {
    let mul = n2;  
    nums.forEach(num => {
        mul = mul*num;  
    });
    console.log(mul);
}

mul(10, 20);          
mul(10, 20, 30, 40);  
mul(10, 30);          

