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

// function checkNumber(num, clbk) {
//     clbk(num);
// }
// function oddEven(num) {
//     if (num % 2 === 0) {
//         console.log(num + " is Even");
//     } else {
//         console.log(num + " is Odd");
//     }
// }
// checkNumber(7, oddEven);

// console.log("1");
// setTimeout(()=>console.log("2")
// ,1000)
// for(let i=0;i<1000;i++){
//     console.log("2");
// }
// console.log("3");
//callbackhell
// setTimeout(()=>{console.log("1")
//     setTimeout(()=>{console.log("2")
//         setTimeout(()=>{console.log("3")
//             setTimeout(()=>{console.log("4")
//                 setTimeout(()=>{console.log("5")
//                     setTimeout(()=>{console.log("6")},1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)

// Promises
// const prm=new Promise((resolve,reject)=>{
// let username="abcd";
// let pass="abcd";
// if(username=="abcd" && pass=="abcde"){
// resolve("Success");
// }
// else{
//     reject("Not Accepted")
// }
// })
// prm.then((msg)=>{
// console.log(msg)
// }).catch((msg)=>{
// console.log(msg)
// }).finally(()=>{
//     console.log("Finally")
// })
// console.log("1")
// async function handlelogin(){
//     console.log("2")
//     try{
//         await prm
//     }catch(e){
// console.log(e)
//     }finally{
//         console.log("finally")
//     }
// }
// handlelogin();