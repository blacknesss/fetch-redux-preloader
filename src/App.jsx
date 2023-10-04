import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTodos } from "./actions";
import Header from "./components/Header";
import ToDo from "./components/ToDo";

function App() {
  const todos = useSelector(state => state.todos)
  const loading = useSelector(state => state.loading)
  
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(loadTodos())
  }, [])

  const removedTask = (id) =>{
    dispatch({
      type: 'REMOVED/TASK',
      payload: [...todos.filter(item => item.id !== id)]
    })
  }

  const changeToggle = (id) =>{
    dispatch({
      type: 'CHANGE/TOGGLE',
      payload: [...todos.map(item => item.id === id ? {
        ...item,
        complete: !item.complete
      } : {...item})]
    })
  }

  return (
    <div className="App">
        <Header/>
      {loading ? <h1>loading...</h1> : 
          (todos.map(item =>{
            return(
            <ToDo
              key={item.id} 
              item = {item} 
              toggleTask={changeToggle} 
              removedTask={removedTask}/>)
            })
          )
      }
    </div>
  );
}

export default App;
