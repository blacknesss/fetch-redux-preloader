


function ToDo({item, toggleTask, removedTask}) {
    return (
         <div className="todo">

            <div className="checkbox">
                <input disabled type="checkbox" checked={item.complete}/>
            </div>
    
            <div className={item.complete ? 'title-strike' : "title"} onClick={() => toggleTask(item.id)}>
                {item.title}
            </div>
    
            <div className="action">
                <button className="btn" onClick={() => removedTask(item.id)}>
                    DEL
                </button>
            </div>

        </div>
              
    )
}

export default ToDo;