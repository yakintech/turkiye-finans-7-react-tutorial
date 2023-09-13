import axios from 'axios';
import React, { useEffect, useState } from 'react'

function GetSample() {

    const [categories, setcategories] = useState([]);

    useEffect(() => {

        axios.get("https://northwind.vercel.app/api/categories")
            .then(res => {
                setcategories(res.data);
            })

    })


    return (<>
    <ul>
        {
            categories.map((item : any) => <li key={item.id}>{item.name}</li>)
        }
    </ul>
    </>)
}

export default GetSample