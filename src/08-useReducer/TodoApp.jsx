import React from 'react';
import TodoItem from "./TodoItem.jsx";
import TodoAdd from "./TodoAdd.jsx";
import { useTodos } from "../hooks/useTodos.js";


function TodoApp(props) {

    const {todos, handleNewTodo, handleDeleteTodo, handleOnToggleTodo} = useTodos();

    return (
        <div className="container-primary">

            <h3 className="h3-primary text-center">Todo App (10) <span>Pending to: ()</span></h3>
            <div className="flex flex-row justify-between mx-2">

                <ul className="w-[600px] mx-10">
                    {
                        todos.map(item => (

                            <TodoItem key={ item.id }
                                      item={ item }
                                      onDeleteTodo={ handleDeleteTodo }
                                      onToggleTodo={ handleOnToggleTodo }
                            />

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