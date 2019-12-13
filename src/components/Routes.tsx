import './Routes.css';

import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import HelloWorld from "./withoutRedux/hello-world/HelloWorld";
import ToggleLike from "./withoutRedux/toggle-like/ToggleLike";
import ArrayToList from "./withoutRedux/array-to-list/ArrayToList";
import Counter from "./withoutRedux/counter/Counter";
import TodoList from "./withoutRedux/todo-list/TodoList";
import Heroes from "./withoutRedux/heroes/Heroes";
import FreeNudes from "./withoutRedux/free-nudes/FreeNudes";

import TodoListWithRedux from "./withRedux/todo-list/TodoList";
import Children from "./withoutRedux/children/Children";

import CounterWithRedux from "./withRedux/counter/Counter";

import HeroesWithRedux from "./withRedux/heroes/Heroes";

const Routes: React.FC = () => {
  return (
    <div className="routes">
      <BrowserRouter>
        <div className="links-container">
          <Link to={"/without-redux/hello-world"}>Hello World</Link>
          <Link to={"/without-redux/children"}>Children</Link>
          <Link to={"/without-redux/toggle-like"}>Toggle Like</Link>
          <Link to={"/without-redux/array-to-list"}>Array To List</Link>
          <Link to={"/without-redux/counter"}>Counter</Link>
          <Link to={"/without-redux/todo-list"}>Todo List</Link>
          <Link to={"/without-redux/free-nudes"}>Free Nudes</Link>
          <Link to={"/without-redux/heroes"}>Heroes</Link>
          
          <div style={{ width: '1px', height: '100%', border: '1px solid #282c34' }}>&nbsp;</div>

          <Link to={"/with-redux/counter"}>Counter</Link>
          <Link to={"/with-redux/todo-list"}>Todo List</Link>
          <Link to={"/with-redux/heroes"}>Heroes</Link>
        </div>
        <div className="routes-container">
          <Switch>
            <Redirect exact={true} from="/" to="/without-redux/hello-world" />

            <Route
              path="/without-redux/hello-world"
              component={() => (
                <HelloWorld name="Gabriel" company={"Heroway"} since={2018} />
              )}
            />

            <Route
              path="/without-redux/children"
              component={() => <Children />}
            />

            <Route
              path="/without-redux/toggle-like"
              component={() => <ToggleLike defaultLiked={true} />}
            />

            <Route
              path="/without-redux/array-to-list"
              component={() => (
                <ArrayToList
                  heroes={[
                    { name: "Spider-Man", alterEgo: "Peter Parker" },
                    { name: "Batman", alterEgo: "Bruce Wayne" },
                    { name: "Captain America", alterEgo: "Steve Rogers" }
                  ]}
                />
              )}
            />

            <Route
              path="/without-redux/counter"
              component={() => <Counter defaultValue={10} />}
            />

            <Route
              path="/without-redux/todo-list"
              component={() => <TodoList />}
            />

            <Route
              path="/without-redux/free-nudes"
              component={() => <FreeNudes />}
            />

            <Route path="/without-redux/heroes" component={() => <Heroes />} />

            {/* REDUX */}

            <Route
              path="/with-redux/counter"
              component={() => <CounterWithRedux />}
            />

            <Route
              path="/with-redux/todo-list"
              component={() => <TodoListWithRedux />}
            />

            <Route
              path="/with-redux/heroes"
              component={() => <HeroesWithRedux />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
