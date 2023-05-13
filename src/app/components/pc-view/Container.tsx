"use client";
import {useState} from "react";

import Left from "../calculadora/Left";
import Right from "../calculadora/Right";

function Container() {
  const [amount, setAmount] = useState(0);

  return (
    <main className="flex h-full gap-4">
      <section className="flex-1 text-black">
        <Left value={amount} onChange={(_amount: number) => setAmount(_amount)} />
      </section>
      <section className="flex-1 rounded-3xl bg-nochecked p-6 text-white overflow-y-auto">
        <Right amount={amount} />
      </section>
    </main>
  );
}

export default Container;
