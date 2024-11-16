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
  const HandleKeydown = (event) => {
    if (event.key === "Enter") {
      HandleAdd();
    }
  };
  return (
    <section className="bg-gradient-to-r from-indigo-400 from-5% via-sky-400 via-30% to-emerald-300 to-100% h-screen">
      <div className="container mx-auto justify-center flex  2xl:top-[10%] xl:top-[10%] lg:top-[10%] md:top-[15%] sm:top-[20%] top-[30%] bottom-[10%] relative">
        <div className="2xl:p-10 xl:p-10 lg:p-9 md:p-7 sm:p-5 p-5 shadow-xl rounded bg-gradient-to-t from-indigo-400 from-5% via-sky-400 via-30% to-emerald-300 to-100%">
          <h4 className="font-semibold font-Raleway 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-lg text-secandari text-center 2xl:pb-5 xl:pb-5 lg:pb-5 md:pb-4 sm:pb-3 pb-1">
            ToDo
          </h4>
          <div className="2xl:pl-5 xl:pl-5 lg:pl-5 md:pl-4 sm:pl-3 pl-3 rounded-md bg-white justify-between flex rounded-r-xl">
            <input
              onChange={HandleChange}
              onKeyDown={HandleKeydown}
              value={todo}
              type="text"
              placeholder="Type A Text"
              className="outline-none placeholder:font-nunitoFont font-nunitoFont 2xl:w-96 xl:w-96 lg:w-96 md:w-80 sm:w-72 w-52 2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-xs text-xs"
            />
            <button
              onClick={HandleAdd}
              className="text-end justify-end 2xl:px-9 xl:px-9 lg:px-8 md:px-6 sm:px-4 px-3 2xl:py-5 xl:py-5 lg:py-5 md:py-4 sm:py-3 py-2  text-primary font-Popins font-medium 2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-xs text-[10px] bg-secandari hover:bg-gradient-to-r hover:from-indigo-400 hover:duration-500 h-full 2xl:rounded-xl xl:rounded-xl lg:rounded-xl md:rounded-xl sm:rounded-md rounded"
            >
              {editingIndex !== null ? "Save" : "ADD"}
            </button>
          </div>
          <h4 className="font-Raleway font-semibold 2xl:text-xl xl:text-xl lg:text-xl md:text-base sm:text-sm text-xs text-primary py-5">
            Your ToDos
          </h4>
          <div className=" 2xl:h-[200px] xl:h-[200px] lg:h-[200px] md:h-[180px] sm:h-[150px] h-[120px] overflow-y-scroll px-5 todo">
            {todos.map((item, index) => (
              <div key={index} className="justify-between flex items-center">
                <div className="pb-2 gap-3 flex items-center">
                  <input
                    type="checkbox"
                    onChange={() => HandleCheckbox(index)}
                    checked={item.isCompleted}
                    className=" 2xl:w-4 xl:w-4 lg:w-4 md:w-4 sm:w-3 w-3 2xl:h-4 xl:h-4 lg:h-4 md:h-4 sm:h-3 h-3 cursor-pointer"
                  />
                  <p
                    className={`font-medium font-Montserrat 2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-xs text-[10px] text-primary cursor-pointer 2xl:w-80 xl:w-80 lg:w-80 md:w-72 sm:w-60 w-40${
                      item.isCompleted ? "line-through" : ""
                    }`}
                  >
                    {item.todo}
                  </p>
                </div>
                <ul className="justify-between flex items-center gap-3">
                  <li className="text-xl text-[#05100e96]">
                    <FiEdit className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg" onClick={() => HandleEdits(index)} />
                  </li>
                  <li className="text-2xl text-[#05100e96]">
                    <MdOutlineDeleteSweep className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg" onClick={() => HandleDelete(index)} />
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
