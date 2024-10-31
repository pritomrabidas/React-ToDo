import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteSweep } from "react-icons/md";


function App() {
  return (
    <section className="bg-gradient-to-r from-indigo-400 from-5% via-sky-400 via-30% to-emerald-300 to-100% h-screen">
      <div className="container mx-auto justify-center flex top-[10%] relative">
        <div className="p-10 shadow-xl rounded bg-gradient-to-t from-indigo-400 from-5% via-sky-400 via-30% to-emerald-300 to-100%">
          <h4 className="font-semibold font-Raleway text-3xl text-secandari text-center pb-5">
            ToDo
          </h4>
          <div className="pl-5 rounded-md bg-white  justify-between rounded-r-xl">
            <input
              type="text"
              placeholder="Type A Text"
              className="outline-none placeholder:font-nunitoFont font-nunitoFont w-96"
            />
            <button className="text-end justify-end p-9 py-5 text-primary font-Popins font-medium text-base bg-secandari hover:bg-gradient-to-r hover:from-indigo-400 hover:duration-500 h-full rounded-xl">
              ADD
            </button>
          </div>
          <div className="py-6 gap-3 flex items-center border-b-2 border-[#868686]">
            <input type="checkbox" className="w-4 h-4" />
            <label className="font-medium font-Montserrat text-base text-primary">
              Show
            </label>
          </div>
          <h4 className="font-Raleway font-semibold text-xl text-primary py-5">
            Your ToDos
          </h4>
          <div className="justify-between flex items-center">
            <div className="pb-2 gap-3 flex items-center">
            <input type="checkbox" className="w-4 h-4" />
            <p className="font-medium font-Montserrat text-base text-primary w-96">
              Hello World
            </p>
            </div>
            <ul className="justify-between flex items-center gap-3">
              <li className=" text-xl text-[#05100e96]"><FiEdit/></li>
              <li className=" text-2xl text-[#05100e96]"><MdOutlineDeleteSweep/></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
