import Button from "../Button/Button";
import "./BillSpliter.css";

function BillSpliter({ friend }) {
  return (
    <form>
      <h1>SPLIT BILL WITH {friend}</h1>
      <div className="my-input">
        <label for="name">{"🧑"} Bill Value</label>
        <input type="text" id="name" name="name" required></input>
      </div>
      <div className="my-input">
        <label for="imgUrl"> {"🌇"} Your expense</label>
        <input type="text" id="imgUrl" name="imgUrl" required></input>
      </div>
      <div className="my-input">
        <label for="imgUrl">
          {" "}
          {"🌇"} {friend}'s expense
        </label>
        <input type="text" id="imgUrl" name="imgUrl" required></input>
      </div>
      <div className="my-input">
        <label for="imgUrl"> {"🌇"} Who is paying the bill?</label>
        <select type="select" id="imgUrl" name="imgUrl" required>
          <option value="you">You</option>
          <option value="friend">Friend</option>
        </select>
      </div>

      <Button>Add</Button>
    </form>
  );
}

export default BillSpliter;
