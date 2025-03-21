import React from 'react';
import { useCounter } from "./hooks/useCounter.js";

function CounterWithCustomHook(props) {


    const {counter, increment, decrement, reset} = useCounter();


    return (
        <div className="container mx-auto border border-amber-300 rounded-2xl m-4">

            <div className="flex justify-center">
                <h3 className="h3-primary"> Counter With Hook: { counter }</h3>

            </div>

            <hr/>

            <div className="flex justify-center">
                <button className="btn-primary" onClick={ () => increment() }> +1</button>
                <button className="btn-primary" onClick={ reset }> Reset</button>
                <button className="btn-primary" onClick={ () => decrement() }> -1</button>
            </div>

        </div>
    );
}

export default CounterWithCustomHook;