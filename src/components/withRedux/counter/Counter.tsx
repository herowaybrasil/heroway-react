import React from 'react';
import * as ReactRedux from 'react-redux';

import * as counterActions from '../../../redux/reducers/counter';
import { IAppState } from '../../../redux/configureStore';
// import { increment, decrement, reset } from '../../../redux/reducers/counter';


interface IProps {
  potato: number; 
  dispatchIncrement: () => void;
  dispatchDecrement: () => void;
  dispatchReset: () => void;
}
//tudo muito bonito mas simplifica esse negocio
const Counter = (props: IProps) => {
    return (
        <div>
           <button onClick={props.dispatchIncrement}>+</button>
           <span>{props.potato}</span>
           <button onClick={props.dispatchDecrement}>-</button>
        </div>
    )
}

const mapStateToProps = (state: IAppState) => {
  return {
    potato: state.counterReducer.counter
  }
}

// Isso dentro de uma classe tem que chamar
// const mapDispatchToProps = (dispatch: any) => { 
//   return {
//     dispatchIncrement: () => dispatch(counterActions.increment()),
//     dispatchDecrement: () => dispatch(counterActions.decrement()),
//     dispatchReset: () => dispatch(counterActions.reset()),
//   }
// }

const mapDispatchToProps = {
    dispatchIncrement: counterActions.increment,
    dispatchDecrement: counterActions.decrement,
    dispatchReset: counterActions.reset,
}

const connectTo = ReactRedux.connect(mapStateToProps, mapDispatchToProps);
export default connectTo(Counter);