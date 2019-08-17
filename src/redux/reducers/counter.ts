interface IInitialState {
  counter: number,
  potato: string,
  posto: string,
  gourmet: boolean,
  propriedade: string,
  eu: string,
  apple: string,
  breadpotato: string,
  lasanha: string,
  cafe: string,
}

const INITIAL_STATE: IInitialState = { 
  counter: 20,
  potato: 'batata',
  posto: 'ipiranga',
  gourmet: false,
  propriedade: 'propriedade',
  eu: 'quero café',
  apple: 'maçã',
  breadpotato: 'pão de batata',
  lasanha: 'de microondas',
  cafe: 'muito bom',
}

export default function counterReducer(state = INITIAL_STATE, action: any) {
  switch(action.type){
    case 'INCREMENT': 
      return ({
        ...state,
        counter: state.counter + 1,
      });

    case 'DECREMENT': 
      return ({
        ...state,
        counter: state.counter - 1,
      });

    case 'RESET': 
      return INITIAL_STATE;

      default:
        return state;
  }
}

export const increment = () => {
    return {
        type: 'INCREMENT',
    }
}

export const decrement = () => {
 return {
     type: 'DECREMENT',
 }    
}

export const reset = () => {
    return{
        type: 'RESET',
    }
}