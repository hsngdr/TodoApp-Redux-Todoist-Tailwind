import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, toogleCompleted } from "./Redux/todoSlice";
import "../node_modules/tailwindcss/base.css";
import "../node_modules/tailwindcss/components.css";
import "../node_modules/tailwindcss/utilities.css";


function App() {
  const [title, setTitle] = useState("");

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const onSave = () => {
    if (title !== "") {
      dispatch(add(title));
    }
    setTitle("");
  };
  const onDelete = (id) => {
    dispatch(remove(id));
  };
  const toogle = (id) => {
    dispatch(toogleCompleted(id));
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="block">
        <div className="flex w-96">
          <input
            className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            mr-2
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          <button
            onClick={onSave}
            className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
          >
            save
          </button>
        </div>
        <div>
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="block p-6 rounded-lg shadow-lg bg-white w-96 mt-5 	"
              >
                {todo.completed ? <p className="text-gray-700 mb-4 break-words line-through">{todo.title}</p> : <p className="text-gray-700 mb-4 break-words">{todo.title}</p>}
                
                <div className="flex justify-between">
                  <button
                    onClick={() => toogle(todo.id)}
                    className="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    {todo.completed ? "not completed" : "completed"}
                  </button>
                  <button
                    onClick={() => onDelete(todo.id)}
                    className="inline-block px-4 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
