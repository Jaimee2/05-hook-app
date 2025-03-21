import React from 'react';
import Message from "./Message.jsx";
import { useForm } from "../hooks/UseForm.js";

function FormWithCustomHooks() {

    const {formState, onInputChange, onResetForm, username, email} = useForm({
        username: 'Jaime',
        email: 'jaime@jaime.com'
    });

    return (

        <div className="container-primary">

            <h3 className="h3-primary">Form with custom hooks 😎</h3>

            <hr/>

            <input type="text"
                   className="input-primary"
                   placeholder="User name"
                   name="username"
                   value={ username }
                   onChange={ (event) => onInputChange(event) }
            />

            <input type="email"
                   className="input-primary"
                   placeholder="Email"
                   name="email"
                   value={ email }
                   onChange={ (event) => onInputChange(event) }
            />

            {
                username === 'jaime' && <Message/>
            }

            <button className="btn-primary" onClick={ onResetForm }>reset</button>
        </div>
    );
}

export default FormWithCustomHooks;