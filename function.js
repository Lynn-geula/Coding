//function declaration 

function a(){
    console.log("This is fn declaration");
    
}
a();
 
// Hoisting 
 b();
function b(){
    console.log("this is hoisting fn");
    
}

// function expression 

 let c = function abc() {
    console.log("This is function expression");
    
}
c();

// Arrow function --> no function keyword and no function name 
// Syntax --> ()=>{}

    let d = ()=>{
        console.log("This is an arrow function");
        
    }
    d();

    
// Immediate invoke function

(function (){
    console.log("This is an Immediate Invoke Function Expression");
    
})();


// Function with return keyword 
 function multiplication(a,b){
    var c = a * b;
     return c;
    
 }
  let num =multiplication(3,4);
  console.log(num);
    //       (or)
  console.log(multiplication(4,5));

  