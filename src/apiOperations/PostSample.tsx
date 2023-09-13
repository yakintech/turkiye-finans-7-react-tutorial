import axios from 'axios';
import React, { useState } from 'react'

function PostSample() {

    const [companyName, setCompanyName] = useState('');
    const [contactName, setcontactName] = useState('');
    const [contactTitle, setContacttitle] = useState('');

    const add = () => {

        var newSupplier = {
            companyName,
            contactName,
            contactTitle
        }

        axios.post("https://northwind.vercel.app/api/suppliers", newSupplier)
            .then(res => {
                console.log('RES', res);
                alert('Success!!')
            })

    }

    return (<>

        <div>
            <label htmlFor="">Company Name: </label>
            <input type='text' onChange={(e) => setCompanyName(e.target.value)} />
        </div>

        <div>
            <label htmlFor="">Contact Name: </label>
            <input type='text' onChange={(e) => setcontactName(e.target.value)} />
        </div>

        <div>
            <label htmlFor="">Contact Title: </label>
            <input type='text' onChange={(e) => setContacttitle(e.target.value)} />
        </div>
        <div>
            <button onClick={() => add()}>Add</button>
        </div>
    </>)
}

export default PostSample