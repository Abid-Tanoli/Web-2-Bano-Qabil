import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addOrUpdateTodo = () => {
    if (input) {
      if (editIndex !== null) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = input;
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
        setTodos([...todos, input]);
      }
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((todoItem, i) => {return i !== index}));
  };

  const editTodo = (index) => {
    setInput(todos[index]);
    setEditIndex(index);
  };

  return (
    <div className="bg-gradient-to-r from-red-100 via-blue-300 to-green-300 min-h-screen flex items-center justify-center p-1 sm:p-6">
      
      <div className="bg-gradient-to-r from-green-300 via-gray-400 to-red-100 w-full max-w-5xl rounded-xl shadow-lg p-8">
        
        <h1 className="text-4xl flex justify-center sm:text-8xl font-bold text-black mb-1">
          Todo List
        </h1>
        <p className="text-black flex justify-center text-sm sm:text-base mb-6">
          Add your Todos in List for Today
        </p>

        <hr className="border-black/40 mb-8" />

        <div className="flex flex-col sm:flex-row gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="New Todo"
            className="flex-1 px-4 py-2 rounded border focus:outline-none text-sm sm:text-base"
          />
          <button
            onClick={addOrUpdateTodo}
            className={`px-4 py-2 rounded  text-white font-semibold text-sm sm:text-base ${
              editIndex !== null
                ? "bg-green-500 hover:bg-blue-600"
                : "bg-blue-600 hover:bg-yellow-600"
            }`}
          >
            {editIndex !== null ? "Update" : "Add Todo"}
          </button>
        </div>

        {todos.length === 0 ? (
          <div className="text-center font-bold text-white text-4xl">
            No tasks yet. Add your first one!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {todos.map((todo, index) => (
              <div
                key={index}
                className="bg-red-300 rounded-lg flex justify-between items-center px-2 py-8"
              >
                <span className="text-white w-400 text-2xl sm:text-4xl font-bold break-words">{todo}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => editTodo(index)}
                    className="px-3 py-2 ml-2 bg-green-500 hover:bg-yellow-400 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodo(index)}
                    className="px-3 py-2 bg-red-500 hover:bg-blue-600 text-white rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
