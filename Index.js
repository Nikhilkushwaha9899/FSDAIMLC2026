// let n = 20;
// let n1 = 30;
// let n2 = 40;
// function sqrroot(x) {
//     return Math.sqrt(x);
// }

// let sum = 0;
// function sumofsqr() {
//     sum = sqrroot(n) + sqrroot(n1) + sqrroot(n2);
//     return sum;
// }
// console.log(sumofsqr());
// console.log("Hello using js")
// let a=78;
// if(a>30){
//     let a=100;
//     console.log("a inside the block "+a)
// }
// console.log("a outside the block "+a)
// const sum = function (a,b) {
//     return a+b;
// }
// console.log(sum(2,3));
// const msg=(str)=>{
//     console.log("Hi "+str);
// }
// msg("js");
// ((n)=>{
//     console.log( Math.sqrt(256));
// })();
// console.log("js");



// function sum(a, b) {
//   return a + b;
// }
// function sumWithMsg(clbk,msg){
//    const result=clbk(20,40);
//    console.log(msg+":" + result);
// }
// sumWithMsg(sum,"Hey calculation with js");


// function login(msg,error){
//     if(error){
//         console.log("Error: "+error);
//     }
//     else{
//         console.log("Success: "+msg);
//     }

// }

// function loginVerification(username,password,clbk){
//     if(username==="0325" && password==="0325"){
//         clbk("Login successful",null);
//     }
//     else{
//         clbk(null,"Invalid username or password");
//     }
// }
// loginVerification("0325","0325",login)
// Callback function

function checkNumber(num, clbk) {
    clbk(num);
}
function oddEven(num) {
    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
}
checkNumber(7, oddEven);