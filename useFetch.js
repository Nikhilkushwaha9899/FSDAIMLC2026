const div=document.getElementById('container')
const bt=document.getElementById('btn')
console.log(div);
async function display(){
div.innerHTML='<h2 style="color:red;">Hello</h2>'   
const serverdata= await fetch("https://fakestoreapi.com/products")
const jsonData=await serverdata.json();
console.log(serverdata)
console.log(jsonData[1].title)
}
bt.addEventListener('click',display);