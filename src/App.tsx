import React from "react";
import logo from "./logo.svg";
import "./App.css";

import HelloWorld from "./components/withoutRedux/hello-world/HelloWorld";
import ToggleLike from "./components/withoutRedux/toggle-like/ToggleLike";
import ArrayToList from "./components/withoutRedux/array-to-list/ArrayToList";
import Counter from "./components/withoutRedux/counter/Counter";
import TodoList from "./components/withoutRedux/todo-list/TodoList";
import Heroes from "./components/withoutRedux/heroes/Heroes";
import FreeNudes from "./components/withoutRedux/free-nudes/FreeNudes";

import Main from "./components/withoutRedux/children/Children";

// import CounterWithRedux from './components/withRedux/counter/Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld
          name="Gabriel"
          company={"Heroway"}
          since={2018}
        />

        {/* <Main /> */}

        {/* <ToggleLike defaultLiked={true} /> */}

        {/* <ArrayToList
          heroes={[
            { name: 'Spider-Man', alterEgo: 'Peter Parker' },
            { name: 'Batman', alterEgo: 'Bruce Wayne' },
            { name: 'Captain America', alterEgo: 'Steve Rogers' },
          ]}
        /> */}

        {/* <Counter defaultValue={10} /> */}
        {/* <CounterWithRedux /> */}

        {/* <TodoList /> */}

        {/* <FreeNudes /> */}

        {/* <Heroes /> */}
      </header>
    </div>
  );
};

export default App;
