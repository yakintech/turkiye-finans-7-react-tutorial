import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Orders() {

    console.log('ORDERS PAGE');
    
    const [orders, setorders] = useState([]);

    useEffect(() => {

        var token = localStorage.getItem('token');

        axios.get("http://localhost:3001/api/orders", {
            headers: {
                'Authorization': `Basic ${token}`
            }
        })
            .then(res => {
                console.log('DATA', res.data);
            })
            .catch(err => {
                console.log('ERROR', err);

            })

    }, [])


    return (<>
    <ul>
        {
            orders && orders.map((item : any) => <li>{item.companyName}</li>)
        }
    </ul>
    </>
    )
}

export default Orders