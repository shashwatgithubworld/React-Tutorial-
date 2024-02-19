import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2
        text-2xl">
        <div
          className="flex flex-wrap justify-center gap-3 shadow-lg bg-white
                   px-3 py-2 rounded-xl" >
         
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => setColor("pink")}
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => setColor("yellow")}
            style={{ backgroundColor: "Yellow" }}
          >
            Yellow
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => setColor("black")}
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => setColor("purple")}
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => setColor("orange")}
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
