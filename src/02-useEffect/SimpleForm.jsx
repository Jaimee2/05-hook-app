import React, { useEffect, useState } from 'react';
import Message from "./Message.jsx";

function SimpleForm(props) {

    const [form, setForm] = useState({
        username: 'Jaime',
        email: 'jaime@jaime.com'
    });

    function onInputChange({target}) {
        const {name, value} = target;
        setForm({...form, [name]: value})
    }

    useEffect(() => {

    }, []);

    useEffect(() => {

    }, [form]);


    return (
        <div className="container-primary">
            <h3 className="h3-primary">Simple form</h3>
            <hr/>

            <input type="text"
                   className="border rounded-lg p-2 m-2 border-amber-400"
                   placeholder="User name"
                   name="username"
                   value={ form.username }
                   onChange={ (event) => onInputChange(event) }
            />

            <input type="email"
                   className="border rounded-lg p-2 m-2 border-amber-400"
                   placeholder="Email"
                   name="email"
                   value={ form.email }
                   onChange={ (event) => onInputChange(event) }
            />

            {
                form.username === 'jaime' && <Message/>
            }


        </div>
    );
}

export default SimpleForm;