import React from "react";
import logo from "./logo.svg";
import "./App.css";

import HelloWorld from "./basics/hello-world/HelloWorld";
import ToggleLike from "./basics/toggle-like/ToggleLike";
import ArrayToList from "./basics/array-to-list/ArrayToList";
import Counter from "./exercises/counter/Counter";
import TodoList from "./exercises/todo-list/TodoList";
import Heroes from "./exercises/heroes/Heroes";
import FreeNudes from "./exercises/free-nudes/FreeNudes";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld
          name="Gabriel"
          company={"Heroway"}
          since={2018}
        />

        {/* <ToggleLike defaultLiked={true} /> */}

        {/* <ArrayToList
          heroes={[
            { name: 'Spider-Man', alterEgo: 'Peter Parker' },
            { name: 'Batman', alterEgo: 'Bruce Wayne' },
            { name: 'Captain America', alterEgo: 'Steve Rogers' },
          ]}
        /> */}

        {/* <Counter defaultValue={10} /> */}

        {/* <TodoList /> */}

        {/* <FreeNudes /> */}

        {/* <Heroes /> */}
      </header>
    </div>
  );
};

export default App;
