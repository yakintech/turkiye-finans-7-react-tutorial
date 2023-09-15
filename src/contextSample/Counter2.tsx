import React, { useContext } from 'react'
import { CounterContext, CounterContextType } from './CounterContext';

function Counter2() {

    const { counter, setcounter } = useContext(CounterContext) as CounterContextType;

    return (<>
    <h1>{counter}</h1>
    <button onClick={() => setcounter(counter + 1)}>Increase</button>
    </>
    )
}

export default Counter2