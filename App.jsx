import React from "react";
import ProfileCard from "./profileCard";
import Counter from "./counter";
import "./styles.css";
import CounterWithUser from "./counterWithUser";
import PrintName from "./printName";

function App() {
  const data = [
    { id: 1, name: "Leanne Graham", email: "leannegraham@abc.com" },
    { id: 2, name: "Ervin Howell", email: "ervinhowell@abc.com" }
  ];

  return (
    <div className="app">
      <CounterWithUser/>
      <PrintName/>
    </div>
  );
}

export default App;
