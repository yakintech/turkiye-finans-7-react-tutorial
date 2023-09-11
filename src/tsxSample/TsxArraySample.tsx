import React from 'react'

function TsxArraySample() {

    var countries = ["Türkiye", "Almanya", "Yunanistan", "Rusya"]

    return (<>
        <ul>
            {
                countries.map((item: string) => <li>{item}</li>)
            }
        </ul>
    </>
    )
}

export default TsxArraySample