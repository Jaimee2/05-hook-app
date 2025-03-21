import React, { useRef } from 'react';

function FocusScreen(props) {

    const inputRef = useRef();


    const onClick = () => {
        //document.querySelector('input').select();
        inputRef.current.select();
    }

    return (
        <div className="container-primary">

            <h3 className="h3-primary">Focus Screen</h3>

            <input ref={ inputRef }
                   type="text"
                   placeholder="Add your name"
                   className="input-primary"
            />

            <button className="btn-primary"
                    onClick={ onClick }
            >
                Set focus
            </button>

        </div>
    );
}

export default FocusScreen;