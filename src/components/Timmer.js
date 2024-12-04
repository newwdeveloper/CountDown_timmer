const Timmer = () => {
  return (
    <div className="w-6/12 border-2 rounded-lg flex flex-col items-center mx-auto pt-14">
      <div className="mb-6">
        <ul className="list-none flex gap-3 text-xl">
          <li>Days:</li>
          <li>Hours:</li>
          <li>Minutes:</li>
          <li>seconds</li>
        </ul>
      </div>
      <ul className="list-none flex gap-3 mb-6 text-xl">
        <li>Days:</li>
        <li>Hours:</li>
        <li>Minutes:</li>
        <li>seconds</li>
      </ul>
    </div>
  );
};

export default Timmer;
