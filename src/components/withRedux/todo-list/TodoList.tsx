import React from "react";
import * as ReactRedux from 'react-redux';

import * as todos from '../../../redux/reducers/todos';

interface IProps {
  todosReducer: {
    todos: Array<{ id: number; description: string; done: boolean }>;
  }
  toggleTodo: (todoId: number) => void
}

class TodoList extends React.Component<IProps> {
  toggle = (todoId: number) => () => {
    this.props.toggleTodo(todoId);
  };

  render() {
    return (
      <ul>
        {this.props.todosReducer.todos.map(todo => {
          return (
            <li
              key={todo.id}
              onClick={this.toggle(todo.id)}
              style={{
                listStyleType: "none",
                textDecoration: todo.done ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {todo.description}
            </li>
          );
        })}
      </ul>
    );
  }
}

// Mapeamos o state do nosso redux para as props do nosso componente.
// Ou seja, o componente TodoList vai receber uma propriedade
// chamada todosReducer 
const mapStateToProps = (state: any) => {
  return {
    todosReducer: state.todosReducer,
  }
}

// Mapeamos ações que podem ser disparadas pelo nosso componente
// Ou seja, o componente TodoList vai receber uma propriedade/função
// chamada toggleTodo, que irá atualizar nosso state através do reducer.
const mapDispatchToProps = {
  toggleTodo: todos.toggleTodo,
}

// Vinculamos o redux com o componente TodoList.
// A partir de agora o componente recebe 2 propriedade adicionais:
// todosReducer e toggleTodo
const connect = ReactRedux.connect(mapStateToProps, mapDispatchToProps);
export default connect(TodoList);
