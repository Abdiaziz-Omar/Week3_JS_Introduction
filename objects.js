// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
    id: 0,
    name: "Example",
    email: "examples@you.edu",
    gender: "F",
  }
  
  // Write your intern objects here:
  
  const mit = {
    ID: 1,
    Name: "Mitzi",
    Email: "mmelloy0@psu.edu",
    Gender: "F",
    }
    
    const ken = {
    ID: 2,
    Name: "Kennan",
    Email: "kdiben1@tinypic.com",
    Gender: "M",
    }
    
    const kev = {
    ID: 3,
    Name: "Keven",
    Email: "kmummery2@wikimedia.org",
    Gender: "M",
    }
    
    const gan = {
    ID: 4,
    Name: "Gannie",
    Email: "gmartinson3@illinois.edu",
    Gender: "M",
    }
    
    const ant = {
    ID: 5,
    Name: "Antonietta",
    Email: "adaine5@samsung.com",
    Gender: "F"
    }

console.log(mit,ken,kev,gan,ant)
  
  // ==== Challenge 2: Reading Object Data ==== 
  // Once your objects are created, log out the following requests from HR into the console:
  
  // Mitzi's name
  
  // Kennan's ID
  
  // Keven's email
  
  // Gannie's name
  
  // Antonietta's Gender

console.log(mit.Name)
console.log(ken.ID)
console.log(kev.Email)
console.log(gan.Name)
console.log(ant.Gender)
  
  // ==== Challenge 3: Object Methods ==== 
  // Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
  // console.log(kennan.speak());
  
  const kenn = {
    ID: 2,
Name: "Kennan!",
Email: "kdiben1@tinypic.com",
Gender: "M",
kennan: function(){
 return `Hello My Name Is ${this.Name}`
}
}
console.log(kenn.kennan())

  // Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
  //console.log(antonietta.multiplyNums(3,4));

  const anto = {
    ID: 5,
    Name: "Antonietta",
    Email: "adaine5@samsung.com",
    Gender: "F",
    anton: function(num1, num2){
      return num1 * num2
    }
    }
    console.log(anto.anton(5, 5))
  
  // === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.
  
  