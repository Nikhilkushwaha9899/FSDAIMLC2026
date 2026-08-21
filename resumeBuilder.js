const div = document.getElementById('root');
const bt = document.getElementById('btn');
const h1 = document.createElement('h1');
h1.innerText = "Data Is Loading...";
h1.style.textAlign='center';
let obj = {
    "Name": "Nikhil",
    "Roll": 135,
    "Branch": "AIML",
    "Clg": "Abes",
    "TechStack": "Developer",
};
function display() {
    div.appendChild(h1)

    setTimeout(() => {
        let table = `<table border=0px style="margin:auto;">
        <tr><th colspan=2  style="font-size:30px;">Resume</th></tr>
            <tr><th  style="font-size:30px;">Name:</th><td  style="font-size:30px;">${obj.Name}</td></tr>
            <tr><th  style="font-size:30px;">RollNo:</th><td  style="font-size:30px;">${obj.Roll}</td></tr>
            <tr><th  style="font-size:30px;">Branch:</th><td  style="font-size:30px;">${obj.Branch}</td></tr>
            <tr><th  style="font-size:30px;">College:</th><td  style="font-size:30px;">${obj.Clg}</td></tr>
            <tr><th  style="font-size:30px;">TechStack:</th><td  style="font-size:30px;">${obj.TechStack}</td></tr>    
        </table>`
        div.innerHTML = table;
    }, 1000)
}
bt.addEventListener('click', display);
