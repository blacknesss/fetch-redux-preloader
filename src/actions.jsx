export const loadTodos = () => {
    return (dispatch) => {
        dispatch({type:'todos/start'})
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(json =>{
                dispatch({
                    type: 'todos/item',
                    payload: json
                })
            })
    }
}