"use client";

import type {Cotizacion} from "../types";

import {useState} from "react";

import Form from "../components/Form";

export default function HomeClient({cotizaciones}: {cotizaciones: Cotizacion[]}) {
  const [amount, setAmount] = useState(0);

  return (
    <main className="flex flex-col sm:flex-row h-full gap-4">
      <section className="flex-1 text-black">
        <Form value={amount} onChange={(_amount: number) => setAmount(_amount)} />
      </section>
      <section className="flex-1 rounded-3xl bg-nochecked p-6 text-white sm:overflow-y-auto">
        <ul className="flex flex-col h-full justify-between items-stretch gap-4">
          {cotizaciones.map(({nombre, venta}) => {
            const total = amount ? Number(amount / venta) : venta;

            return (
              <li
                key={nombre}
                className="flex items-center justify-between gap-4 h-[52px] sm:h-[62px]"
              >
                <div className="text-emerald-100 my-auto">{nombre}</div>
                <div className="flex items-center gap-4">
                  {amount ? (
                    <div className="flex flex-col items-end ">
                      <div className="text-sm font-bold text-textnumbers">
                        {Number(venta).toLocaleString("es-AR", {
                          style: "currency",
                          currency: "ARS",
                        })}
                      </div>
                      <div className="text-2xl font-bold text-textnumbers">
                        {Number(total).toLocaleString("es-AR", {
                          style: "currency",
                          currency: "ARS",
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="text-3xl font-bold text-textnumbers ">
                      {Number(venta).toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                      })}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
