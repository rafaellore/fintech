import { useData } from "../contexts/DataContext";

export default function Header() {
  const { data } = useData();

  console.log(data)

  return (
    <div>
      Header
    </div>
  )
}
