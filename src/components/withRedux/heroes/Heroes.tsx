import React from 'react'
import * as ReactRedux from 'react-redux';
import { getHeroes } from '../../../redux/reducers/heroes';
import { IAppState } from '../../../redux/configureStore';

class Heroes extends React.Component<any, any> {
  componentDidMount() {
    this.props.dispatchGetHeroes();
  }

  render() {
    if (this.props.heroesReducer.isLoading) {
      return <h1>LOADING...</h1>
    }

    return (
      <ul>
        {this.props.heroesReducer.heroes.map((hero: any) => {
          return (
            <li key={hero.id}>{hero.name}</li>
          )
        })}
      </ul>
    )
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    heroesReducer: state.heroesReducer,
  }
}

const mapDispatchToProps = {
  dispatchGetHeroes: getHeroes  
}

const connectTo = ReactRedux.connect(mapStateToProps, mapDispatchToProps);
export default connectTo(Heroes);