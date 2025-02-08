//Array

//PUSH
let a = [1,2,3,4,5,6,7,8,9]
a.push(10)
console.log(a);

//POP
let b = [1,2,3,4,5,6,7,8,9,10,11]
b.pop()
console.log(b);

//SHIFT
let c = [0,1,2,3,4,5]
c.shift()
console.log(c);

//UNSHIFT
let d = [1,2,3,4,5]
d.unshift(6)
console.log(d);

//SORT a string
let e = ["c","d","a","b","e"]
e.sort();
console.log(e);

//Sort a number 
let w = [1,3,4,2,5,6,8,7,10,9]
w.sort()
console.log(w);


//REVERSE a string 
let f = "Lynnea"
console.log(f.split("").reverse("").join(""));

// Reverse a number 
let z = [10,20,30,40,50]
console.log(z.reverse());

//Every
let g = [1,2,3,4,5]
console.log( g.every( (e) => e<=5));

// Some 
let h = [1,3,9]
console.log(h.some( (e) => e%2==0));
  
//Map 
 let i = [2,4,6,8]
 console.log(i.map( (e) => e**2));

 //Filter
 let j = [1,2,3,4,5]
 console.log(j.filter( (e) => e%2==0));

 //Reduce
 let k = [1,2,3,4,5]
 console.log(k.reduce( (x,y) => x+y,0));

 //foreach --> executes line by line 
 let l = [1,2,3,4,5]
 l.forEach((n,o,p)=>{
    console.log(n);
    
 })

 let r = ["Hello","Hi","Good","Evening"]
 r.forEach((n,o,p)=>{
    console.log(n);
    
 })

 
 // For of --> iterates over the values(Array & String)
 let num = ["Lynn","Geula"]
 for(let q of num){
    console.log(q);
    
 }
 
 
 
 
 
 



























