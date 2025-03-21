import React from 'react';
import { useForm } from "../hooks/UseForm.js";

function TodoAdd({onNewTodo}) {

    const {description, formState, onInputChange, onResetForm} = useForm({
        description: ''
    });


    const onFormSubmit = (event) => {
        event.preventDefault();

        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        onNewTodo(newTodo);

    }

    return (
        <div>
            <h3 className="text-xl font-semibold m-1">Add TODO</h3>
            <hr/>

            <form onSubmit={ onFormSubmit }>
                <input className="input-primary"
                       type="text"
                       placeholder="What do you want to do?"
                       name="description"
                       value={ description }
                       onChange={ onInputChange }
                />
            </form>

            <button className="btn-primary"
                    onClick={ onFormSubmit }
            >
                Add
            </button>
        </div>
    );
}

export default TodoAdd;