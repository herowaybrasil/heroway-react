import "./Heroes.css";

import React from "react";
import HeroPowerStats from "./HeroPowerStats";

interface IHero {
  id: number;
  name: string;
  imgs: Array<{ sm: string }>
}

interface IState {
  heroes: IHero[];
}

class Heroes extends React.Component<any, IState> {
  state = {
    heroes: []
  };

  async componentDidMount() {
    const response = await fetch("https://akabab.github.io/superhero-api/api/all.json");
    const allHeroes = await response.json();

    // const firstTenHeroes = this.getFirstTenHeroes(allHeroes);
    // this.setState({ heroes: firstTenHeroes });

    const filteredHeroes = this.getFilteredHeroes(allHeroes);
    this.setState({ heroes: filteredHeroes });
  }

  getFirstTenHeroes = (heroes: IHero[]) => {
    return heroes.slice(0, 10);
  }

  getFilteredHeroes = (heroes: IHero[]) => {
    const heroesNames = ['Spider-Man', 'Black Widow', 'Iron Man', 'Scarlet Witch', 'Thor', 'Gamora', 'Captain America'];
    return heroes.filter((hero) => heroesNames.includes(hero.name));
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
