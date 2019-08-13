import "./Heroes.css";

import React from "react";
import HeroPowerStats from "./HeroPowerStats";

class Heroes extends React.Component {
  state = {
    heroes: []
  };

  async componentDidMount() {
    const response = await fetch("https://akabab.github.io/superhero-api/api/all.json");
    const heroes = await response.json();
    const firstTenHeroes = heroes.slice(0, 10);

    this.setState({ heroes: firstTenHeroes });
  }

  render() {
    return (
      <div className="heroes-container">
        {this.state.heroes.map((hero: any) => {
          return (
            <div key={hero.id} className="card">
              <h3>{hero.name}</h3>
              <div className="hero">
                <img src={hero.images.sm} />
                <HeroPowerStats id={hero.id} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Heroes;
