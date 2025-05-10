import LeftContainer from "./components/LeftContainer/LeftContainer";
import RightContainer from "./components/RightContainer/RightContainer";
import "./App.css";
import Friend from "./components/Friend/Friend";

const photoUrl = "https://i.pravatar.cc/100";

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
          <ul>
            {friends.map((friend) => (
              <Friend data={friend} />
            ))}
          </ul>
        </LeftContainer>
        <RightContainer></RightContainer>
      </div>
    </div>
  );
}

export default App;
