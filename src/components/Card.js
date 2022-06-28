import "./Card.css";

function Card(props) {
  //const classes = "card" + props.className;
  return <div className="card expense-item">{props.children}</div>;
}
export default Card;
