import React, { useState } from 'react';

const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const {counter1, counter2, counter3} = counter;

    return (
        <div className="container mx-auto border border-amber-300 rounded-2xl">

            <div className="flex justify-center">
                <h3 className="h3-primary">Counter1: { counter1 }</h3>
                <h3 className="h3-primary">Counter2: { counter2 }</h3>
                <h3 className="h3-primary">Counter3: { counter3 }</h3>
            </div>
            <hr/>


            <div className="flex justify-center">
                <button className="btn-primary"
                        onClick={ () => setCounter({...counter, counter1: counter1 + 1}) }
                >
                    add +1
                </button>

            </div>
        </div>
    );
}

export default CounterApp;