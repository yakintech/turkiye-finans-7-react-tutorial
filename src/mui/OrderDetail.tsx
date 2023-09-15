import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Order } from '../models/Order';

function OrderDetail() {

    const { id } = useParams();
    const [detail, setdetail] = useState<Order>({});


    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/orders/' + id)
            .then(res => {
                setdetail(res.data);
            })

    }, [])


    return (<>
        <div>
            <label htmlFor="">ID: {detail.id}</label>
        </div>
        <div>
            <label htmlFor="">Customer Id: {detail.customerId}</label>
        </div>
        <div>
            <label htmlFor="">Order Date: {detail.orderDate}</label>
        </div>
        <div>
            <label htmlFor="">Street: {detail.shipAddress?.street}</label>
        </div>
        <div>
            <label htmlFor="">City: {detail.shipAddress?.city}</label>
        </div>
        <div>
            <label htmlFor="">Country: {detail.shipAddress?.country}</label>
        </div>
    </>)
}

export default OrderDetail
