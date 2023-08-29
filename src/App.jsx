import React from "react";
import  {createRoot}  from "react-dom/client";

import SearchParams from "./SeacrhParams";

const App = () => {
  return (
    <div>
      <h1>Adpot Me</h1>
      <SearchParams/>
    </div>
  )
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
