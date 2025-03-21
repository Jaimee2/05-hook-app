import React from 'react';

function TodoItem({item}) {
    return (

        <li className="flex flex-row justify-between items-center
                     py-5 px-10 m-1 border rounded-2xl border-amber-200"
        >
            <span className="text-lg font-semibold">{ item.description }</span>

            <button className="btn-delete">
                delete
            </button>

        </li>
    );
}

export default TodoItem;