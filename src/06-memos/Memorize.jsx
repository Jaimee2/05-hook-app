import React, { useState } from 'react';
import { useCounter } from "../hooks/useCounter.js";
import Small from "./Small.jsx";

function Memorize(props) {

    const {counter, increment} = useCounter();

    const [show, setShow] = useState(true);


    return (
        <div className="container-primary">
            <h3 className="h3-primary">Counter: <Small value={ counter }/></h3>

            <button className="btn-primary"
                    onClick={ () => increment() }>
                +1
            </button>

            <button className="btn-primary"
                    onClick={()=> setShow(!show)}
            >
                show/hide {JSON.stringify(show)}
            </button>

        </div>
    );
}

export default Memorize;