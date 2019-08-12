import React from "react";

interface IProps {
  name: string;
  company: string;
  since?: number; // opcional
}
const HelloWorld: React.FC<IProps> = props => {
  return (
    <>
      <div>Olá, meu nome é {props.name}</div>
      <div>Somos a {props.company}!</div>
      {props.since && (
        <div>Estamos ajudando pessoas a conquistarem seu primeiro emprego desde {props.since}!</div>
      )}
    </>
  );
};

export default HelloWorld;
