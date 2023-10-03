import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTodos } from "./actions";

function App() {
  const todos = useSelector(state => state.todos)
  const loading = useSelector(state => state.loading)
  
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(loadTodos())
  }, [])


  return (
    <div style={{textAlign: "center"}} className="App">
      {loading ? <div style={{fontSize: '30px'}}>loading...</div>:(
        todos.map(item =>{
          return (
            <div>{item.title}</div>
          )
        })
      )}
    </div>
  );
}

export default App;
