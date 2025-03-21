import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer.js";

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
];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Todo Add',
            payload: todo
        }
        dispatch(action);

    };

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleOnToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    };
    return {
        todos,
        todosCount: todos.length,
        todosPending: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleOnToggleTodo
    }
}