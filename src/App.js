import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTodos } from "./actions";

function App() {
  const todos = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(loadTodos())
  })


  return (
    <div className="App">
      {todos.map(item =>{
        return (
          <div>{item.title}</div>
        )
      })}
    </div>
  );
}

export default App;
