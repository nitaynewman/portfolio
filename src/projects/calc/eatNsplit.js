import { useState } from "react";
import "./calc.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function EatNsplit() {
  const [selFriends, setSelFriends] = useState(null);
  const [friends, setFriends] = useState(initialFriends);
  const [showFriend, setShowFriend] = useState(false);
  function handleShowFriend() {
    setShowFriend((show) => !show);
  }
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }
  function handleSelect(friend) {
    setSelFriends((cur) => (cur?.id === friend.id ? null : friend));
    setShowFriend(false);
  }
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selFriends.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelFriends(null);
  }
  return (
    <div className="eat">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelect}
          selFriends={selFriends}
        />
        {showFriend && <FormAdd onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowFriend}>
          {showFriend ? "Close" : "Add"}
        </Button>
      </div>
      {selFriends && (
        <FormSplit
          selFriends={selFriends}
          onSplitBill={handleSplitBill}
          key={selFriends.id}
        />
      )}
    </div>
  );
}

function FriendsList({ friends, onSelection, selFriends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selFriends={selFriends}
        />
      ))}
    </ul>
  );
}
function Friend({ friend, onSelection, selFriends }) {
  const isSel = selFriends?.id === friend.id;
  return (
    <li className={isSel ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3> {friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}
        </p>
      )}
      {friend.balance === 0 && (
        <p className="gray">you and {friend.name} are even</p>
      )}
      <Button onClick={() => onSelection(friend)}>
        {isSel ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}

function FormAdd({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSabmit(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      image: `${image}?=${id}`,
      name,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSabmit}>
      <label>👲 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label> 🏕 Image url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplit({ selFriends, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidUser, setPaidUser] = useState("");
  const paidFriend = bill ? bill - paidUser : "";
  const [isPaying, setIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidUser) return;
    onSplitBill(isPaying === "user" ? paidFriend : -paidUser);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selFriends.name}</h2>

      <label> 💰 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>👨‍🎓 Your expenses</label>
      <input
        type="text"
        value={paidUser}
        onChange={(e) =>
          setPaidUser(
            Number(e.target.value) > bill ? paidUser : Number(e.target.value)
          )
        }
      />

      <label>👩 {selFriends.name}'s expenses</label>
      <input type="text" disabled value={paidFriend} />

      <label>💲 who is paying</label>
      <select value={isPaying} onChange={(e) => setIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selFriends.name}</option>
      </select>

      <Button>Split the Bill</Button>
    </form>
  );
}
