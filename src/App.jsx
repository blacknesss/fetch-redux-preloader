import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTodos } from "./actions";
import Header from "./Header";

function App() {
  const todos = useSelector(state => state.todos)
  const loading = useSelector(state => state.loading)
  
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(loadTodos())
  }, [])


  return (
    <div className="App">
        <Header/>
      {loading ? <div style={{fontSize: '30px'}}>loading...</div>:(
        todos.map(item =>{
          return (
            <div className="todo">
              <div className="checkbox">
                <input type="checkbox"/>
              </div>

              <div className="title">
                {item.title}
              </div>

              <div className="action">
                  <button className="btn">
                      Delete
                  </button>
              </div>
            </div>
            
          )
        })
      )}
    </div>
  );
}

export default App;
