const div=document.getElementById('root');
const bt=document.getElementById('btn');
const h1=document.createElement('h1');
h1.innerText="Data Is Loading...";
let obj={
    "Name":"Nikhil",
    "Roll":135,
    "Branch":"AIML",
    "Clg":"Abes",
    "TechStack":"Developer",
};
 function display() {
    try{
        div.appendChild(h1)
        
    }catch(e){
        console.error(e);
    }
    finally{
        div.removeChild(h1);
    }
}
bt.addEventListener('click',display);
