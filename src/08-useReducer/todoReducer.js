export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Todo Add':
            return [...initialState, action.payload];

        case '[TODO] Remove Todo':
            //Filter return a new list
            return initialState.filter(todo => todo.id !== action.payload);
        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    // Wrong! this is a mutable object!!!! todo.done = !todo.done;
                    return {
                        ...todo,
                        done: !todo.done
                    };
                }

                return todo
            })

        default:
            return initialState;
    }
}