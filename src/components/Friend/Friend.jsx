import Button from "../Button/Button";
import "./Friend.css";

function Friend({ data, isCurrent, onDeselectFriend, onSetCurrentFriend }) {
  return (
    <li className={`friend ${isCurrent ? "current-friend" : ""}`}>
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
      {isCurrent ? (
        <Button click={onDeselectFriend}>Close</Button>
      ) : (
        <Button click={() => onSetCurrentFriend(data.id)}>Select</Button>
      )}
    </li>
  );
}

export default Friend;
