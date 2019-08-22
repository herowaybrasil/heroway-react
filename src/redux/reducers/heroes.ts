import { Dispatch } from "redux";

const INITIAL_STATE = {
  isLoading: false,
  heroes: [],
}

export default function heroesReducer(state = INITIAL_STATE, action: any) {
  switch(action.type){
    case 'HTTP_GET_HEROES': 
      return ({
        ...state,
        heroes: INITIAL_STATE.heroes,
        isLoading: true,
      });

    case 'HTTP_GET_HEROES_SUCCESS': 
      return ({
        ...state,
        isLoading: false,
        heroes: action.payload.heroes,
      });

      default:
        return state;
  }
}

export function getHeroes() {
  return async function(dispatch: Dispatch) {
    dispatch({
      type: 'HTTP_GET_HEROES',
      payload: {}
    });

    const response = await fetch("https://akabab.github.io/superhero-api/api/all.json");
    const heroes = await response.json();
    const tenFirstHeroes = heroes.slice(0, 10);

    dispatch({
      type: 'HTTP_GET_HEROES_SUCCESS',
      payload: {
        heroes: tenFirstHeroes
      }
    });
  }
}