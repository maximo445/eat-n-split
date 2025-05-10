import "./Friend.css";

function Friend({ data }) {
  return (
    <li className="friend">
      <img src={data.url} alt="head-shot" />
      <span>
        <h3>{data.name}</h3>
        <p>
          {data.balance === 0
            ? "even"
            : data.balance < 0
            ? `You owe ${data.name} $${data.balance}`
            : `${data.name} owes you $${data.balance}`}
        </p>
      </span>
      <button>Select</button>
    </li>
  );
}

export default Friend;
