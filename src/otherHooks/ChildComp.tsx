import React from 'react'

function ChildComp() {

    console.log('Child component rendered!');

    //expensive calc
    const calc = () => {
        console.log('CALC');
        
    }

    calc();

    return (<>
        <h4>Child Component</h4>
    </>)
}

//React memo ile tüm componenti memorize ediyorum... use memo ile sadece istediğim metodun dönüşünü de memorize edebilirim!
export default React.memo(ChildComp)