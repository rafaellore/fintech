import DateRange from "./DateRange";
import Months from "./Months";

export default function Header() {
  return (
    <header className="mb">
      <div className="mb">
        <DateRange />
      </div>
      <Months />
    </header>
  )
}
