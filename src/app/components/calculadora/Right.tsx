import cotizaciones from "../../dolarCot.json";
const COTIZACIONES = cotizaciones as Record<string, {compra: number; venta: number}>;

function Right({amount}) {
  return (
    <ul className="flex flex-col gap-4">
      {Object.entries(COTIZACIONES).map(
        ([name, value]: [string, {compra: number; venta: number}]) => {
          const total = amount ? Number(amount / value.venta) : value.venta;

          return (
            <li key={name} className="flex gap-4 justify-between items-center">
              <div className="text-sm">{name}</div>
              <div className="text-greenlight text-3xl font-bold">
                {Number(total).toLocaleString("es-AR", {style: "currency", currency: "ARS"})}
              </div>
            </li>
          );
        },
      )}
    </ul>
  );
}

export default Right;
