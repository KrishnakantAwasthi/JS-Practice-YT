console.log("Hello World");

const Account_id = 1234
let Account_Email = "Krishna@123";
var Account_Password = "kk@123";
Account_city = "Jaipur";
let Acccount_state;

console.log("Account_id :", Account_id);
console.log("Account_Email :", Account_Email);
console.log("Account_Password ",  Account_Password);
console.log("Account_city :", Account_city);

// Change all data & values

// Account_id = 098;   // Not Allowed
Account_Email = "kk@12321";
Account_Password = "chacha@321";
Account_city = "Gwalior";

console.log("Account_id :", Account_id);
console.log("Account_Email :", Account_Email);
console.log("Account_Password ",  Account_Password);
console.log("Account_city :", Account_city);

// Print in Table Form  

console.table([Account_id, Account_Email, Account_Password,Account_city]);

  
 //  Var - prefer Not to use 
 //  beacuse of issue in block scope and fuctional scope

 console.table([Account_id, Account_Email, Account_Password,Account_city, Acccount_state]);









