import { useData } from "../contexts/DataContext";

export default function Resume() {
  const { data } = useData();

  if (data === null) return null;

  return (
    <section>
      <div className="resume flex mb">
        <div className="box">
          <h2>Vendas</h2>

          <span>
            {data
              .filter((i) => i.status !== "falha")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>

        <div className="box">
          <h2>Recebido</h2>

          <span>
            {data
              .filter((i) => i.status === "pago")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>

        <div className="box">
          <h2>Processando</h2>

          <span>
            {data
              .filter((i) => i.status === "processando")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
      </div>
      <div className="box">Gráficos</div>
    </section>
  );

}
