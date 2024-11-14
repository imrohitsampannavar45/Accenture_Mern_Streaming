import "./Jsx_Demo.css";

function Demo2() {
  const name = "Sachin Tendulkar";
  const persons = [
    { id: 10001, name: "Radha" },
    { id: 10002, name: "Krishna" },
    { id: 10003, name: "Ram" },
    { id: 10004, name: "Seetha" },
  ];
  const fruits = ["apple", "orange", "Kiwi", " cherry"];

  return (
    <>
      <h1 className="headings">Welcome Home {name} </h1>
      <ul className="list">
        {persons.map((p) => (
          <li key={p.id}>
            {p.id}-{p.name}
          </li>
        ))}
        <li>{fruits}</li>
      </ul>
    </>
  );
}

export default Demo2;
