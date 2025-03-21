import React, { useReducer } from 'react';
import { todoReducer } from "./todoReducer.js";
import TodoItem from "./TodoItem.jsx";
import TodoAdd from "./TodoAdd.jsx";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Buy bread 🥖',
        done: false
    },
    {
        id: new Date().getTime() * 3,
        description: 'Buy water 💧',
        done: false
    },
]

function TodoApp(props) {

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const handleNewTodo = (todo) => {
        console.log(todo);

        const action = {
            type: '[TODO] Todo Add',
            payload: todo
        }

        dispatch(action);

    };


    return (
        <div className="container-primary">

            <h3 className="h3-primary text-center">Todo App (10) <span>Pending to: ()</span></h3>
            <div className="flex flex-row justify-between mx-2">

                <ul className="w-[600px] mx-10">
                    {
                        state.map(item => (
                            <TodoItem key={ item.id } item={ item }/>
                        )) }

                </ul>

                <div>
                    <TodoAdd onNewTodo={ (todo) => handleNewTodo(todo) }/>
                </div>

            </div>
        </div>
    );
}

export default TodoApp;