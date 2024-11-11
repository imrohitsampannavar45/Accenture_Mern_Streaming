const nums=[10,20,30,40]
console.log(typeof nums)
console.log(nums.length)
nums.push(50)//add items to the last position
console.log(nums)
nums.push(50,60,70)
console.log(nums)

//nums=["10","20","30"]//error

nums.pop()//remove the last item
console.log(nums)

nums.unshift(0.1)//add items to the first position
console.log(nums)

nums.shift()//remove the first item
console.log(nums)

nums.splice(3,2)//remove item/s from the given pos
console.log(nums)

nums.splice(3,0,40)
console.log(nums)
nums.splice(3,0,70,80)
console.log(nums)