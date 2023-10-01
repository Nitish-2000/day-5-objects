"use strict"
//objects
/* objects are kind of variables for structuring the data
* They always comes in "key" "value" pairs*/

//Declaring the object

const user1 = {                 // Curly braces methode of declaring object    
    username : "Nitish",
    ID : 565600,
    place : "Bengaluru"
}
console.log(user1.username);    //dot methode of printing object value

var user2 = new Object();
user2.username = "AAA";            //another methode of declaring object
user2.ID = 100100;
user2.place = "Bengaluru";
console.log(user2.username);         //another methode of pring object values

//updating an  value in an object

user1.place = "KPLYM";
console.log(user1.place);
user2.ID = "6846454";
console.log(user2.ID);

//Creating an key value in existing object

user1.occupation = "MERN Stack Devoloper";
user2.occupation ="MERN Stack Devoloper";
console.log(user1.occupation + " "+user2.occupation )

//deleting an key value in an object
delete user1.occupation;
console.log(user1);
//------------------------------------------------------

//Json(Java script object notation)
//JSON methode
// JASON.parse(a)   -- converts JSON  object into javascript object
// JASON.stringify(a) -- conerts a from javastript object into JSON script

const user3 = '{"name":"John","age":30,"city":"New York"}';//in JSON script
//console.log(person);
const user33 = JSON.parse(user3);
console.log(user33)

const user4='{"name":"anu","ID":3543513,"place":"church street"}';
const user44=JSON.parse(user4);
console.log(user44);

//converting from js object to JSON using stringify methode
const user333= JSON.stringify(user33);
console.log(user333);
const user444=JSON.stringify(user44);
console.log(user444);
//-----------------------------------------------------------------
//Nested json objects
const user5={
    "Name":"AAA",
    "ID":565431,
    "Place":"BBB",
    "Occupation":{
        "Occupation1":"Software Programmer",
        "Occupation2":"Driver",
        "Occupation3":"Farmer"}
    };
console.log(user5.Occupation.Occupation2);
//const user55=JSON.parse(user5);

var person = {
    "name":"kamal",              //JSON nested object type
    "age" :60,
    "occupation":"actor",   
    "address": {
        "city" : "chennai",
        "pincode" : 60001
    }
}
console.log(person.age)

//JSON nested array
 const countries = [ 
    {"name": "Afghanistan", "code": "AX"}, //JSON nested array type
    {"name": "land Islands", "code": "AX"}, 
    {"name": "Albania", "code": "AL"}, 
    {"name": "Algeria", "code": "DZ"}, 
    {"name": "American Samoa", "code": "AS"}, 
    {"name": "AndorrA", "code": "AD"}]
 countries[0].code="AF"; 
 console.log(countries[0].code);
 
   //Array destructuring methode
   const array1=["Nitish",23,"BNGLUR","Devoloper"]
   const[Name,Age=15,Place,Occupation,sex="Male"] = array1;
   console.log(sex);

   //object destructuring
   const college = {
    Names:"AAA",
    Places:"BBB",
    Approved:true
   }
//    console.log(college);
   const{Names,Places,approved,Department="CSE"}=college;
   console.log(Department);
   console.log(college); 

   //this destructuring methode cam be also applied to nested objects
   const user6={
    name1:"aaa",
    place1:"bbb",
    address1:{
        line1:"ccc",
        line2:"ddd"
    }
   }
   const{name1,place1}=user6;
   console.log(name1);



   

