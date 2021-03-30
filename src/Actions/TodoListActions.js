export const getAllList = (todoList) => {
    return {
        type: "TODO_LIST_LOADED",
        payload: todoList
    }
}
export const addNewTip = (todoList) => {
    return {
        type: "ADD_NEW_TIP",
        payload: todoList
    }
}
