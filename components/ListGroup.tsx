import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  const items = ["NYC", "San Fran", "Tokyo", "London", "Paris"];
  //const items = [];

  const checkItems = items.length === 0 && <p>No item found</p>;

  return (
    <>
      <h1>List</h1>
      {checkItems}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
