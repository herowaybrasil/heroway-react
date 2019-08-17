import React from 'react';

interface IProps {
  children: React.ReactNode;
}
const Parent = (props: IProps) => {
  return (
    <div>
      Componente Pai!
      {props.children}
    </div>
  )
}


const Children = () => {
  return (
    <h1>Componente Filho!</h1>
  )
};

const Children2 = () => {
  return (
    <h1>Componente Filho 2!</h1>
  )
};

const Main = () => {
  return (
    <Parent>
      <Children />
      <Children2 />
    </Parent>
  )
}

export default Main;