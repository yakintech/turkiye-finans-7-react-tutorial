import React, { useEffect, useState } from 'react'
import { Supplier } from '../models/Supplier'
import axios from 'axios'

function SupplierPage() {

    const [suppliers, setsuppliers] = useState<Supplier[]>([])

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/suppliers')
            .then(res => {
                setsuppliers(res.data)
            })

    }, [])


    return (<>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Company Name</th>
                <th>Contact Name</th>
                <th>City</th>
                <th>Country</th>
            </tr>
        </thead>
        <tbody>
            {
                suppliers && suppliers.map((item:Supplier) => {
                    return <tr>
                        <td>{item.id}</td>
                        <td>{item.companyName}</td>
                        <td>{item.contactName}</td>
                        <td>{item.address?.city}</td>
                        <td>{item.address?.country}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
    </>)
}

export default SupplierPage