"use client";
import {useState} from "react";

function Calculadora() {
  const [selectedOption, setSelectedOption] = useState();

  const handleClick = (value: number) => {
    setSelectedOption(value);
  };

  const buttons: number[] = [1, 2, 3, 4, 5];

  return (
    <div className="bg-white shadow-xl mx-auto md:rounded-2xl md:p-4">
      <div className="flex flex-col md:flex-row h-full w-full">
        <div className="h-full w-full">
          <div className="flex flex-col justify-center items-center h-1/5 w-1/2">
            <label htmlFor="bill">Bill</label>
            <input className="bg-placeholder h-1/3" id="bill" />
          </div>
          <div className="grid h-3/5 m-6">
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
        </div>
        <div className="h-full p-6 bg-nochecked  rounded-2xl">
          <div className="flex flex-col justify-center items-center h-full">
            <label htmlFor="dolar" />
            <input id="dolar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;
