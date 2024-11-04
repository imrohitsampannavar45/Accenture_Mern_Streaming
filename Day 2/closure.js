// var location = "hyderabad"

// function getLocation(){
//     console.log("Location is " +location);
//     location = "Chennai"
//     console.log("After updating the location is " +location)
    
// }

// console.log("Location is - Outside  "+location);


// getLocation();
// console.log("Location is after the function call " +location);





function counter(){
    var x = 1;
    function a(){
        x++;
        console.log("The value is "+x);
        
    }
    return a ;
}



var b = counter () 

b();
b()
b()