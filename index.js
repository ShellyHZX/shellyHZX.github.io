import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function fetchTodos() {
  return [
    {
      id: 1,
      title: "開發環境",
      completed: false,
    },
    {
      id: 2,
      title: "新增按鈕",
      completed: false,
    },
    {
      id: 3,
      title: "列表清單",
      completed: false,
    },
    {
      id: 4,
      title: "輸入框",
      completed: false,
    },
    {
      id: 5,  
      title: "睡覺",
      completed: false,
    },
  ];
}

function TodoItem(props) {
  return (
    <li>
      <input
        type="checkbox"
        defaultChecked={props.completed}
        onChange={props.onToggle}
      />
      <label>{props.title}</label>
      <button variant="outline-danger" onClick={props.onDelete}>
        Delete
      </button>
    </li>
  );
}

function InputForm({ todos, onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      onAddTodo({
        id: todos.length + 1,
        title: inputValue,
        completed: false,
      });
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState(fetchTodos());

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <InputForm todos={todos} onAddTodo={handleAddTodo} />

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onDelete={() => {
              setTodos(todos.filter((x) => x.id !== todo.id));
            }}
            onToggle={() => {
              setTodos(
                todos.map((x) =>
                  x.id === todo.id ? { ...x, completed: !x.completed } : x
                )
              );
            }}
          />
        ))}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
