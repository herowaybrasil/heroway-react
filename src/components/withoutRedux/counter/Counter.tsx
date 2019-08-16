import React from "react";

interface IProps {
  defaultValue: number;
}

interface IState {
  counter: number;
}

class Counter extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      counter: props.defaultValue
    };
  }

  add = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  sub = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <>
        <button onClick={this.add}>+</button>
        <span>{this.state.counter}</span>
        <button onClick={this.sub}>-</button>
      </>
    );
  }
}

export default Counter;
