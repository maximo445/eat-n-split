import { useState } from "react";
import LeftContainer from "./components/LeftContainer/LeftContainer";
import RightContainer from "./components/RightContainer/RightContainer";
import Friend from "./components/Friend/Friend";
import AddFriend from "./components/AddFriend/AddFriend";
import BillSpliter from "./components/BillSpliter/BillSpliter";
import Button from "./components/Button/Button";
import { nanoid } from "nanoid";
import "./App.css";

const photoUrl = "https://i.pravatar.cc/";

const tempFriends = [
  { id: 1, name: "Clark", balance: -7, url: "https://i.pravatar.cc/100" },
  { id: 2, name: "Sarah", balance: 20, url: "https://i.pravatar.cc/70" },
  { id: 3, name: "Anthony", balance: 0, url: "https://i.pravatar.cc/89" },
];

function App() {
  const [friends, setFriends] = useState(tempFriends);
  const [currentFriend, setCurrentFriend] = useState(null);
  const [isAddingFriend, setIsAddingFriend] = useState(false);

  let activeFriend;

  if (currentFriend) {
    activeFriend = friends.filter((friend) => friend.id === currentFriend)[0];
  }

  const spliter =
    currentFriend !== null ? (
      <BillSpliter
        name={activeFriend.name}
        id={activeFriend.id}
        onSplitBill={handleSplitBill}
      />
    ) : null;

  function handleSetCurrentFriend(id) {
    setCurrentFriend(id);
  }

  function handleDeselectFriend() {
    setCurrentFriend(null);
  }

  function handleSplitBill(e, amount, id) {
    e.preventDefault();
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === id
          ? { ...friend, balance: friend.balance + amount }
          : friend
      )
    );
  }

  function closeAdd() {
    setIsAddingFriend(false);
  }

  function openAdd() {
    setIsAddingFriend(true);
    setCurrentFriend(null);
  }

  function handleAddFriend(e, name) {
    e.preventDefault();

    const num = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    const newFriend = {
      id: nanoid(),
      name,
      balance: 0,
      url: `https://i.pravatar.cc/${num}`,
    };
    setFriends((friends) => [...friends, newFriend]);
  }

  return (
    <div className="app">
      <div className="container">
        <LeftContainer>
          <ul className="friends-container">
            {friends.map((friend) => (
              <Friend
                key={friend.id}
                data={friend}
                isCurrent={friend.id === currentFriend}
                onDeselectFriend={handleDeselectFriend}
                onSetCurrentFriend={handleSetCurrentFriend}
              />
            ))}
          </ul>

          {isAddingFriend && <AddFriend onAddFriend={handleAddFriend} />}

          {!isAddingFriend ? (
            <Button click={openAdd}>Add Friend</Button>
          ) : (
            <Button click={closeAdd}>Close</Button>
          )}
        </LeftContainer>
        <RightContainer>{spliter}</RightContainer>
      </div>
    </div>
  );
}

export default App;
