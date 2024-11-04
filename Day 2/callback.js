//Predefined Functions 



// setTimeout(()=>{
// console.log('====================================');
// console.log("Fetch the Data From the Server");
// console.log('====================================');
// },5000)


// console.log("Fetching the Data ");



function OuterFunction(Callback){
    console.log("Hello From Outer Functions");
    Callback()
    console.log("thank You");
    

}

function Callback(){
    console.log("Hello From Inner Callback Function")
}

OuterFunction(Callback)