import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteSweep } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const HandleAdd = () => {
    if (todo.trim() === "") {
      alert("Please enter a ToDo item");
    } else {
      if (editingIndex !== null) {
        // Save edited todo
        const updatedTodos = todos.map((item, index) =>
          index === editingIndex ? { ...item, todo } : item
        );
        setTodos(updatedTodos);
        setEditingIndex(null);
      } else {
        // Add new todo
        setTodos([...todos, { todo, isCompleted: false }]);
      }
      setTodo("");
    }
  };

  const HandleChange = (e) => {
    setTodo(e.target.value);
  };

  const HandleCheckbox = (index) => {
    const updatedTodos = todos.map((item, i) =>
      i === index ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(updatedTodos);
  };

  const HandleEdits = (index) => {
    setTodo(todos[index].todo);
    setEditingIndex(index);
  };

  const HandleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <section className="bg-gradient-to-r from-indigo-400 from-5% via-sky-400 via-30% to-emerald-300 to-100% h-screen">
      <div className="container mx-auto justify-center flex top-[10%] bottom-[10%] relative">
        <div className="p-10 shadow-xl rounded bg-gradient-to-t from-indigo-400 from-5% via-sky-400 via-30% to-emerald-300 to-100%">
          <h4 className="font-semibold font-Raleway text-3xl text-secandari text-center pb-5">
            ToDo
          </h4>
          <div className="pl-5 rounded-md bg-white justify-between rounded-r-xl">
            <input
              onChange={HandleChange}
              value={todo}
              type="text"
              placeholder="Type A Text"
              className="outline-none placeholder:font-nunitoFont font-nunitoFont w-96"
            />
            <button
              onClick={HandleAdd}
              className="text-end justify-end p-9 py-5 text-primary font-Popins font-medium text-base bg-secandari hover:bg-gradient-to-r hover:from-indigo-400 hover:duration-500 h-full rounded-xl"
            >
              {editingIndex !== null ? "Save" : "ADD"}
            </button>
          </div>
          <h4 className="font-Raleway font-semibold text-xl text-primary py-5">
            Your ToDos
          </h4>
          <div className="h-[200px] overflow-y-scroll px-5 todo">
            {todos.map((item, index) => (
              <div key={index} className="justify-between flex items-center">
                <div className="pb-2 gap-3 flex items-center">
                  <input
                    type="checkbox"
                    onChange={() => HandleCheckbox(index)}
                    checked={item.isCompleted}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <p
                    className={`font-medium font-Montserrat text-base text-primary cursor-pointer w-80 ${
                      item.isCompleted ? "line-through" : ""
                    }`}
                  >
                    {item.todo}
                  </p>
                </div>
                <ul className="justify-between flex items-center gap-3">
                  <li className="text-xl text-[#05100e96]">
                    <FiEdit onClick={() => HandleEdits(index)} />
                  </li>
                  <li className="text-2xl text-[#05100e96]">
                    <MdOutlineDeleteSweep onClick={() => HandleDelete(index)} />
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
