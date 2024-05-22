import { useData } from "../contexts/DataContext";
import DateRange from "./DateRange";

export default function Header() {
  const { data } = useData();

  console.log(data)

  return (
    <div>
      <DateRange />
    </div>
  )
}
