
export const getAllList = (todoList) => {
    return {
        type: "TODO_LIST_LOADED",
        payload: todoList
    }
}