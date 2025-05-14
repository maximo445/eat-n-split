import { useState } from "react";
import Button from "../Button/Button";
import "./BillSpliter.css";
function BillSpliter({ name, id, onSplitBill }) {
  const [billValue, setBillValue] = useState(null);
  const [yourBill, setYourBill] = useState(null);
  const [friendBill, setFriendBill] = useState(null);
  const [whoPays, setWhoPays] = useState("you");

  let amountToBalance = 0;

  if (whoPays === "you" && friendBill) {
    amountToBalance = friendBill;
  }

  if (whoPays === "friend" && yourBill) {
    amountToBalance = yourBill * -1;
  }

  function resetYou() {
    if (yourBill === null) {
      setYourBill(0);
    }
  }

  function resetFriend() {
    if (friendBill === null) {
      setFriendBill(0);
    }
  }

  function handleYourExpense(amount) {
    if (amount > billValue) {
      alert("Enter a value lower than bill..");
      return;
    }
    const friend = billValue - amount;
    setFriendBill(friend);
    if (amount === 0) {
      setYourBill(null);
    } else {
      setYourBill(amount);
    }
  }
  function handleFriendExpense(amount) {
    const you = billValue - amount;
    setYourBill(you);
    if (amount === 0) {
      setFriendBill(null);
    } else {
      setFriendBill(amount);
    }
  }

  return (
    <form
      onSubmit={(e) => onSplitBill(e, amountToBalance, id)}
      className="bill-spliter"
    >
      <h1>SPLIT BILL WITH {name.toUpperCase()}</h1>
      <div className="my-input">
        <label for="name">Bill Value</label>
        <input
          value={billValue}
          onChange={(e) => setBillValue(e.target.value)}
          type="number"
          id="name"
          name="name"
          required
          placeholder="Enter bill.."
        ></input>
      </div>
      <div className="my-input">
        <label for="imgUrl">Your expense</label>
        <input
          value={yourBill}
          onChange={(e) => handleYourExpense(Number(e.target.value))}
          onBlur={resetYou}
          type="number"
          id="imgUrl"
          name="imgUrl"
          disabled={billValue <= 0 ? true : false}
          placeholder="Enter your expense.."
        ></input>
      </div>
      <div className="my-input">
        <label for="imgUrl">{name}'s expense</label>
        <input
          value={friendBill}
          onChange={(e) => handleFriendExpense(Number(e.target.value))}
          onBlur={resetFriend}
          type="number"
          id="imgUrl"
          name="imgUrl"
          disabled={billValue <= 0 ? true : false}
          placeholder="Enter friend's expense.."
        ></input>
      </div>
      <div className="my-input">
        <label for="imgUrl">Who is paying the bill?</label>
        <select
          value={whoPays}
          onChange={(e) => setWhoPays(e.target.value)}
          type="select"
          id="imgUrl"
          name="imgUrl"
          required
        >
          <option value="you">You</option>
          <option value="friend">{name}</option>
        </select>
      </div>

      <Button>Add</Button>
    </form>
  );
}

export default BillSpliter;
