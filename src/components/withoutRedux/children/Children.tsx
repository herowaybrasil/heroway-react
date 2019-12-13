import React from 'react';

interface IProps {
  children: React.ReactNode;
}
const Outer = (props: IProps) => {
  return (
    <div>
      Outer Component!
      {props.children}
    </div>
  )
}


const Inner = () => {
  return (
    <h1>Inner Component!</h1>
  )
};

const Children = () => {
  return (
    <Outer>
      <Inner />
    </Outer>
  )
}

export default Children;