// Write your solution in this file!
var customerName = `bob`;

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}
console.log(customerName);

function setBestCustomer(){
    window.bestCustomer =`not bob`
}

function overwriteBestCustomer(){
    window.bestCustomer = `maybe bob`
}
const LeastFavoriteCustomer = `a customer`
function changeLeastFavoriteCustomer(){
    LeastFavoriteCustomer = `another customer`
}