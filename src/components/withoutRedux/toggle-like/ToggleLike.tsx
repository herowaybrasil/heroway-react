import React from "react";

interface IProps {
  defaultLiked: boolean;
}

interface IState {
  liked: boolean;
}

/**
 * FUNÇÕES PADRÕES - render / componentDidMount / etc.
 * PROPRIEDADES PADRÕES - this.props / this.state;
 * this.props ===> SOMENTE LEITURA
 * this.state ===> DECLARA, LÊ E MODIFICA
 */

//  <ToggleLike defaultLiked={true} />

// TRANSFORMANDO MINHA CLASSE COMUM EM UM COMPONENTE REACT
class ToggleLike extends React.Component<IProps, IState> {
  // construtor é o 1 cara a ser executado
  constructor(props: IProps) {
    super(props); // TEM QUE TER, FAZER O QUE? =(

    // DECLARAÇÃO DO THIS.STATE
    this.state = {
      liked: props.defaultLiked // this.state.liked vai ser o valor do defaultLiked
    };
  }

  componentDidMount() {
    console.log("COMPONENTE ACABOU DE SER MONTADO!");
  }

  changeLikedState = () => {
    // abordagem IMPERATIVA, NÃO FUNCIONA!
    // this.state.liked = true;

    this.setState({ liked: this.state.liked ? false : true });
  };

  // React.Component usa essa função para renderizar nosso conteudo
  // função reservada do react que é executada automaticamente
  render() {
    console.log("COMPONENTE ESTÁ SENDO RENDERIZADO!");

    return (
      <>
        <button onClick={this.changeLikedState}>Toggle Like</button>
        <div>props.defaultLiked = {this.props.defaultLiked.toString()}</div>
        <div>state.liked = {this.state.liked.toString()}</div>

        {this.state.liked === true ? "LIKED" : "NOT LIKED"}
      </>
    );
  }
}

export default ToggleLike;
