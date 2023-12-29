import HomeClient from "./client";

export default async function Home() {
  const res = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales", {
    next: {revalidate: 60},
  });
  const data = (await res.json()) as Promise<
    {casa: {nombre: string; compra: string; venta: string}}[]
  >;

  const cotizaciones = (await data)
    .filter((cotizacion) =>
      ["Dolar Oficial", "Dolar Bolsa", "Dolar Blue"].includes(cotizacion.casa.nombre),
    )
    .map((cotizacion) => ({
      nombre: cotizacion.casa.nombre,
      compra: Number(cotizacion.casa.compra.replace(".", "").replace(",", ".")),
      venta: Number(cotizacion.casa.venta.replace(".", "").replace(",", ".")),
    }));

  return <HomeClient cotizaciones={cotizaciones} />;
}
