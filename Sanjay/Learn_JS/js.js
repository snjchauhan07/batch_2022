//STRING MANIPULATION

//.sub
/*let str = "this is a javascript tutorial. It is good tutorial.";
let SubString  = str.substr( 10 , 19);
console.log(str);
console.log(SubString);*/

//.substring
/*let str = "this is a javascript tutorial. It is good tutorial.";
let SubString  = str.substring( 10 , 20);
console.log(str);
console.log(SubString);*/

//.indexOf
/*let str = "this is a javascript tutorial. It is good tutorial.";
let position  = str.indexOf('good');
console.log(str);
console.log(position);*/

//.lastIndexOf
/*let str = "this is a javascript tutorial. It is good tutorial.";
let position  = str.lastIndexOf('good');
console.log(str);
console.log(position);*/

//.trim

//included end and start
/*let str = " this is a javascript tutorial. It is good tutorial. ";
let trimmedStr  = str.trim();
console.log(str);
console.log(str);*/

//.toUpperCase and .toLowerCase
/*let str = " this is a javascript tutorial. It is good tutorial. ";
let UPPER  = str.toUpperCase();
console.log(str);
console.log(UPPER);*/

//lower
/*let str = " This is a JavaScript Tutorial. It is Good Tutorial. ";
let lower  = str.toLowerCase();
console.log(str);
console.log(lower);*/

//.replace
/*let str = " This is a JavaScript Tutorial. It is Good Tutorial. ";
let Replace = str.replace('Good' , 'Best'); 
console.log(str);
console.log(Replace);*/

//.include
/*let str = " This is a JavaScript Tutorial. It is Good Tutorial. ";
let INCLUDES = str.includes('html'); 
console.log(str);
console.log(INCLUDES);*/



//ARRAY

//this is a variables syntax
// let book1 ="Math";
// let book2 ="Physics";
// let book3 ="Bio";
// let book4 ="Computer Science";
// console.log();


// updating a variable
/*let book1 ="English";*/


//this is a array syntax
/*let Books = ["Math", "Physics", "Bio", "Computer Science"];*/
            // 0        1        2             3
//updating a array
/*Books[0] = "Programming";*/
/*console.log(Books);*/




/*let Books = ["Math", "Physics", "Bio", "Computer Science"];
console.log(Books[1]);

let Books = ["Math", "Physics", "Bio", "Computer Science"];
console.log(Books[2]);

let Books = ["Math", "Physics", "Bio", "Computer Science"];
console.log(Books[3]);*/


// another method
// let book = new Array("Math", "Physics", "Bio", "Computer Science");


//another valid array 
/*let asset = [1, 2, "hello", 3];
console.log(asset);*/



//OPERATIONS IN ARRAY
//.length
/*let Books = ["Math", "Physics", "Bio", "Computer Science"];
console.log(Books.length);*/


//add a new array 
//.push
/*let Books = ["Math", "Physics", "Bio", "Computer Science"];
Books.push("C++");
console.log(Books);*/

//ADD A NEW ARRAY IN START 
//.unshift
/*let Books = ["Math", "Physics", "Bio", "Computer Science"];
Books.unshift("C++");
console.log(Books);*/


//REMOVING A ARRAY FROM BEGINNING AND ENDING
//.pop
/*let Books = ["Math", "Physics", "Bio", "Computer Science"];
Books.pop();
//ending se jitne element remove karne hai utni baari .pop define kardo
///Books.pop();
console.log(Books);*/


//removing elements from starting 
/*let Books = ["Math", "Physics", "Bio", "Computer Science"];
Books.shift();
//ending se jitne element remove karne hai utni baari .shift define kardo
//Books.shift();
console.log(Books);*/


//removing element in anywhere in array

/*let Books = ["Math", "Physics", "Bio", "Computer Science"];
//.splice me do parameter pass karte hai pehla konsa element removing karna hai in array counting formation and second parameter me kitne element ko remove karna hai
//example(1,1) ye define karta hai ki array ka ek number wala element remove karo or second parameter kehta hai ki is element ke baad or kitne element remove karne hai
//Books.splice(1,1);
//removing all elements from array
//Books =[];
//another method for removing all the elements from array
//Books.length =0;
console.log(Books);*/


//finding a position of element in array
/*let Books = ["Math", "Physics", "Bio", "Computer Science"];
let position = Books.indexOf('Bio');
console.log(position);*/


//find isAarry is a array or not
/*let Books = ["Math", "Physics", "Bio", "Computer Science"];

//a syntax variable for cheaking 
// let Books = "Math";
console.log(Array.isArray(Books));*/

//split a string into a array
//parameter me jo bhi cheez hogi usko chodhkar baaki ke sabhi element array me split ho jayenge chahe parameter me space bhi kyu na ho it will be changed in array
/*let text = "This is a random text";
let wordArray = text.split(' ');
console.log(wordArray);*/


//converting a array into a string 
//ye split ka bilkul oppsitehai
/*let Books = ["Math", "Physics", "Bio", "Computer Science"];
let arrayWords = Books.join(' ');
console.log(arrayWords);*/


//join two array and make them one
/*let Books = ["Math", "Physics", "Bio", "Computer Science"];
let Books2 = ["English", "Punjabi"];
let Books3 = ["chemistry", "Urdu"];
let NewBook = Books.concat(Books2, Books3);
console.log(NewBook);*/
