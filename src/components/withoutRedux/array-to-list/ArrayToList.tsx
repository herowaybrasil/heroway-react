import React from "react";

interface Hero {
  name: string;
  alterEgo: string;
}

interface IProps {
  heroes: Hero[];
}
const ArrayToList: React.FC<IProps> = props => {
  return (
    <ul style={{ listStyleType: "none" }}>
      {props.heroes.map(hero => {
        // precisamos definir a propriedade key quando estamos dentro de um map
        // a propriedade key é como se fosse o "id" do nosso elemento e o React utiliza isso internamente
        // REF:https://pt-br.reactjs.org/docs/lists-and-keys.html

        return <li key={hero.name}>{hero.name}</li>;
      })}
    </ul>
  );
};

export default ArrayToList;
