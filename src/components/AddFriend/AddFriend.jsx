import "./AddFriend.css";
import Button from "../Button/Button";

function AddFriend() {
  return (
    <form className="add-friend">
      <div className="my-input">
        <label for="name">{"🧑"} Friend Name</label>
        <input type="text" id="name" name="name" required></input>
      </div>

      <div className="my-input">
        <label for="imgUrl"> {"🌇"} Image URL</label>
        <input type="text" id="imgUrl" name="imgUrl" required></input>
      </div>

      <Button>Add</Button>
    </form>
  );
}

export default AddFriend;
