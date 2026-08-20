const div = document.getElementById('container')
const bt = document.getElementById('btn')
const h2 = document.createElement('h2')
h2.innerText = "Data is loading ...";
function cart(ele){
    alert("Cart is calling"+ele)
}
async function display() {
    try {
        div.appendChild(h2)
        const serverdata = await fetch("https://fakestoreapi.com/products")
        const jsonData = await serverdata.json();
        console.log(serverdata)
        // console.log(jsonData[1].title)
        // div.innerHTML = `<h2 style="color:red;">${JSON.stringify(jsonData)}</h2>`;
        let table =`<table border=4px>
        <tr><th>Item_Image</th><th>Item_Id</th><th>Item_Title</th><th>Item_Price</th><th>Add To Cart</th></tr>
        ${
            jsonData.map((ele)=>{
                 return `<tr>
                 <td><img src=${ele.image} height=50px width=50px></img></td>
                <td>${ele.id}</td>
                <td>${ele.title}</td>
                <td>${ele.price}</td>
                <td><button onclick=cart(${ele.id})>Add</button></td>
                </tr>
                `
        })
        }
        </table>
        `
        div.innerHTML=table;
    } catch (e) {
        console.error(e);
    }
    finally {
        div.removeChild(h2)
    }
}
bt.addEventListener('click', display); 