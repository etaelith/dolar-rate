"use client";
import {useState} from "react";

function Calculadora() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleClick = (value) => {
    setSelectedOption(value);
  };

  const buttons = ["Opción 1", "Opción 2", "Opción 3", "Opción 4", "Opción 5"];

  return (
    <div className="row-span-5 rounded-t-lg bg-white  shadow-xl">
      <div className="flex flex-col justify-center items-center h-1/6 w-1/2 mx-auto">
        <label htmlFor="bill">Bill</label>
        <input className="bg-placeholder h-1/3" id="bill" />
      </div>
      <div className="grid h-2/5 m-6">
        <div className="w-full flex flex-wrap justify-center">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`px-8 py-4 m-2 text-sm font-medium rounded-md ${
                selectedOption === button
                  ? "bg-checked text-white"
                  : "bg-nochecked text-white border border-gray-300"
              } focus:outline-none`}
              onClick={() => handleClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-grow h-1/3 mx-6 bg-nochecked  rounded-2xl">
        <div className="flex flex-col justify-center items-center h-full">
          <label htmlFor="dolar" />
          <input id="dolar" />
        </div>
      </div>
    </div>
  );
}

export default Calculadora;
