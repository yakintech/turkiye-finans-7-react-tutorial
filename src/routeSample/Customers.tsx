import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Customers() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/customers')
            .then(res => {
                setCustomers(res.data);
            })

    }, [])

    return (<>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                </tr>
            </thead>

            <tbody>
                {
                    customers.map((item: any) => {
                        return <tr>
                            <td><Link to={'/customers/' + item.id}>{item.id}</Link></td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default Customers