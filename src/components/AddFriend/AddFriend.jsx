import "./AddFriend.css";
import Button from "../Button/Button";
import { useState } from "react";

function AddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  return (
    <form onSubmit={(e) => onAddFriend(e, name)} className="add-friend">
      <div className="my-input">
        <label htmlFor="name">Friend Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          name="name"
          required
        ></input>
      </div>

      <div className="my-input">
        <label htmlFor="imgUrl"></label>
        <input type="text" id="imgUrl" name="imgUrl"></input>
      </div>

      <Button>Add</Button>
    </form>
  );
}

export default AddFriend;
