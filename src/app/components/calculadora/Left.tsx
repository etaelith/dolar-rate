"use client";

function Left({value, onChange}: {value: number; onChange: (amount: number) => void}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="block text-sm font-medium " htmlFor="amountToExchange">
        Monto en ARS
      </label>
      <div className="flex ">
        <span className="inline-flex items-center px-3 text-sm bg-placeholder border border-r-0 border-gray-300 rounded-l-md ">
          $
        </span>
        <input
          className="rounded-none rounded-r-lg  border block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  text-right bg-placeholder"
          id="amountToExchange"
          placeholder={`${value}`}
          type="number"
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default Left;
