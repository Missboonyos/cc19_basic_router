import useJuneStore from "../store/juneStore";

// rfce
function EasyZustand() {
  // javascript

  // Step 2 Use Store
  const firstName = useJuneStore((state) => state.firstName);
  const address = useJuneStore((state) => state.address);
  const profile = useJuneStore((state) => state.profile);
  const products = useJuneStore((state) => state.products);
  const number = useJuneStore((state) => state.number);
  const actionIncrease = useJuneStore((state) => state.actionIncrease);
  const actionDecrease = useJuneStore((state) => state.actionDecrease);
  console.log(number);

  const hdlClick = () => {
    // javascript .......
    actionDecrease();
  };

  return (
    <div>
      <p className="text-8xl">{number}</p>
      <button onClick={actionIncrease} className="bg-green-400">
        Increase
      </button>
      <br/>
      <button onClick={hdlClick} className="bg-green-400">
        Decrease
      </button>
      <br />
      <button onClick={hdlClick} className="bg-green-400">
        Multi
      </button>
      <br />
      <button onClick={hdlClick} className="bg-green-400">
        Divide
      </button>
      <br />
    </div>
  );
}
export default EasyZustand;
