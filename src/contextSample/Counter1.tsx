import React, { useContext } from 'react'
import { CounterContext, CounterContextType } from './CounterContext'

function Counter1() {

    const { counter } = useContext(CounterContext) as CounterContextType;

    return (<>
        <h1>{counter}</h1>
    </>
    )
}

export default Counter1