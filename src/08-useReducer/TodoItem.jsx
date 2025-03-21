import React from 'react';

function TodoItem({item, onDeleteTodo, onToggleTodo}) {
    return (

        <li className="flex flex-row justify-between items-center
                     py-5 px-10 m-1 border rounded-2xl border-amber-200"
        >
            <span className={ `text-lg font-semibold ${ (item.done) ? 'line-through text-gray-300' : '' }` }
                  onClick={ () => onToggleTodo(item.id) }
            >
                { item.description }
            </span>

            <button className="btn-delete"
                //with arrowf it executes immediately when the component load
                    onClick={ () => onDeleteTodo(item.id) }
            >
                delete
            </button>

        </li>
    );
}

export default TodoItem;