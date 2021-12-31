import React from "react";
import Counter from "./components/counter";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div>
      <Counter number={0} />
      <hr />
      <Todos />
    </div>
  );
};

export default App;
