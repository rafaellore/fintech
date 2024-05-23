import { useData } from "../contexts/DataContext";
import SalesItem from "./SalesItem";

const Sales = () => {
  const { data } = useData();

  if (data === null) return null;
  return (
    <ul>
      {data.map((venda) => (
        <li key={venda.id}>
          <SalesItem venda={venda} />
        </li>
      ))}
    </ul>
  );
};

export default Sales;
