import React from 'react'
import { categories } from '../data/categories'

function TsxObjectArraySample() {


    return (<>
        <ul>
            {
                categories.map((item:any) => <li>{item.name}</li>)
            }
        </ul>
    </>
    )
}

export default TsxObjectArraySample