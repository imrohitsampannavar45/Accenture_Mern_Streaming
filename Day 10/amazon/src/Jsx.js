import "./Jsx.css";

function Demo() {
  const myElement = (
    <>
      <ul className="table">
        <li className="row">Apple</li>
        <li className="row">Banana</li>
        <li className="row">Cheeires</li>
      </ul>
    </>
  );

  return (
    <>
      <h1 className="heading">JSX Demo</h1>
      {myElement}
    </>
  );
}

export default Demo;
