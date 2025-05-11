import Button from "../Button/Button";
import "./Friend.css";

function Friend({ data }) {
  return (
    <li className="friend">
      <div className="info">
        <img src={data.url} alt="head-shot" />
        <span>
          <h3>{data.name}</h3>
          <p
            className={
              data.balance > 0 ? "owes-you" : data.balance < 0 ? "you-owe" : ""
            }
          >
            {data.balance === 0
              ? "even"
              : data.balance < 0
              ? `You owe ${data.name} $${Math.abs(data.balance)}`
              : `${data.name} owes you $${data.balance}`}
          </p>
        </span>
      </div>
      <Button>Select</Button>
    </li>
  );
}

export default Friend;
