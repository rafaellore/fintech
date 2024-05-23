import Month from "./Month";

const Months = () => {
  return (
    <div className="flex">
      <Month n={-3} />
      <Month n={-2} />
      <Month n={-1} />
      <Month n={0} />
    </div>
  );
};

export default Months;
