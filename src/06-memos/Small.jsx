import React, { memo } from 'react';

// Memo should use just when is really needed in terms of performance
export const Small =  memo(function Small({value}) {

        console.log("I was render again 😎 ")
        return (

            <small>{ value }</small>

        );
    }
)
export default Small;