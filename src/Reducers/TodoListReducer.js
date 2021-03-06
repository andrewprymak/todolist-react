const initialState = {
    List: []
}

const TodoListReducer = (state = initialState, action) => {
    switch(action.type){
        case "TODO_LIST_LOADED": 
        return {
            List: action.payload
        }
        case "ADD_NEW_TIP": 
        return {
            List: action.payload
        }
        default: 
            return state;
    }
}

export default TodoListReducer;