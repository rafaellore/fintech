import { useData } from "../contexts/DataContext";

export default function Resume() {
  const { data } = useData();

  console.log(data)
  return (
    <div>Resume</div>
  )
}
