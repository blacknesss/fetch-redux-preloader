import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';


const initialState = {
  todos: [
    {complete: false},
  ],
  loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'todos/start':
        return {
          loading: true
        }
        
      case 'todos/item':
        return {
          todos: action.payload
        }

      case 'REMOVED/TASK':
        return {
          todos: action.payload
        }
      case 'CHANGE/TOGGLE':
        return {
          todos: action.payload
        }
      default:
        return state;
    }
}
const store = createStore(reducer, applyMiddleware(thunk))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);