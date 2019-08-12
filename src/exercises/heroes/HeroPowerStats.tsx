import "./HeroPowerStats.css";

import React from "react";

interface IProps {
  id: number;
}

class HeroPowerStats extends React.Component<IProps> {
  state = {
    stats: []
  };

  getHeroPowerStats = async () => {
    const response = await fetch(`https://akabab.github.io/superhero-api/api/powerstats/${this.props.id}.json`);
    const stats = await response.json();

    this.setState({ stats: stats });
  };

  render() {
    if (this.state.stats.length === 0) {
      return (
        <div className="hero-button">
          <button onClick={this.getHeroPowerStats}>Get Status</button>
        </div>
      );
    }

    return (
      <div className="hero-power-stats-component">
        {Object.keys(this.state.stats).map((key: any) => (
          <div className="attributes">
            <h4>{key}</h4>
            <div>{this.state.stats[key]}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default HeroPowerStats;
