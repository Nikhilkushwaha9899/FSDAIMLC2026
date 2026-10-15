import React, { useEffect, useState } from 'react';

function Shopping() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const serverdata = await fetch(
                    "https://fakestoreapi.com/products"
                );

                const jsonData = await serverdata.json();
                setData(jsonData);
            } catch (e) {
                console.log(e);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Shopping</h1>

            {data.map((i) => {
                return (
                    <div
                        key={i.id}
                        style={{
                            border: '2px solid white',
                            padding: '10px',
                            margin: '10px'
                        }}
                    >
                        <h2>{i.id}</h2>
                        <h2>{i.title}</h2>
                        <h2>${i.price}</h2>
                        <p>{i.description}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Shopping;