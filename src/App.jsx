import React from "react";
import  {createRoot}  from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adpot Me</h1>
      <Pet name="Luna" animal="dog" breed="Havanese"/>
      <Pet name="Peper" animal="bird" breed="Cockatail"/>
      <Pet name="Doink" animal="cat" breed="Mixed"/>
    </div>
  )
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
