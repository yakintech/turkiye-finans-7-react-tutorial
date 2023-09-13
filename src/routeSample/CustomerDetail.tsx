import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function CustomerDetail() {

    const [detail, setdetail] = useState<any>({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/customers/' + id)
            .then(res => {
                setdetail(res.data);
            })


    }, [])



    return (<>
        <button onClick={() => navigate(-1)}>Go Back!!</button>
        <button onClick={() => navigate('/about')}>Go About!!</button>

        <h1>Detail Page</h1>
        <p>Company Name: {detail.companyName}</p>
        <p>Contact Name: {detail.contactName}</p>
        <p>Contact Title: {detail.contactTitle}</p>
        <p>Street: {detail.address?.street}</p>
        <p>City Title: {detail.address?.city}</p>
    </>)
}

export default CustomerDetail