import LeftContainer from "./components/LeftContainer/LeftContainer";
import RightContainer from "./components/RightContainer/RightContainer";
import Friend from "./components/Friend/Friend";
import AddFriend from "./components/AddFriend/AddFriend";
import BillSpliter from "./components/BillSpliter/BillSpliter";
import Button from "./components/Button/Button";
import "./App.css";

const photoUrl = "https://i.pravatar.cc/";

const friends = [
  { id: 1, name: "Clark", balance: -7, url: "https://i.pravatar.cc/100" },
  { id: 2, name: "Sarah", balance: 20, url: "https://i.pravatar.cc/70" },
  { id: 3, name: "Anthony", balance: 0, url: "https://i.pravatar.cc/89" },
];

function App() {
  return (
    <div className="app">
      <div className="container">
        <LeftContainer>
          <ul className="friends-container">
            {friends.map((friend) => (
              <Friend data={friend} />
            ))}
          </ul>
          <AddFriend />
          <Button>Close</Button>
        </LeftContainer>
        <RightContainer>
          <BillSpliter />
        </RightContainer>
      </div>
    </div>
  );
}

export default App;
