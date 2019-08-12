import React from "react";

interface IState {
  todos: Array<{ id: number; description: string; done: boolean }>;
}

class TodoList extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      todos: [
        { id: 1, description: "Entregar desafio HTML/CSS", done: false },
        { id: 2, description: "Estudar Javascript", done: true },
        { id: 3, description: "Estudar React", done: false }
      ]
    };
  }

  toggle = (todoId: number) => () => {
    // this.wrongWay(todoId);
    this.rightWay(todoId);
  };

  wrongWay = (todoId: number) => {
    // Essa abordagem altera o objeto this.state.todos,
    // NÃO devemos fazer isso em React!
    for (let i = 0; i < this.state.todos.length; i++) {
      if (todoId === this.state.todos[i].id) {
        this.state.todos[i].done = !this.state.todos[i].done;
      }
    }

    this.setState({ todos: this.state.todos });
  };

  rightWay = (todoId: number) => {
    // Essa é a abordagem correta!
    // geramos um NOVO objeto (todos) a partir dos dados de this.state.todos.
    const todos = this.state.todos.map(todo => {
      if (todoId === todo.id) {
        todo.done = !todo.done;
      }

      return todo;
    });

    this.setState({ todos: todos });
  };

  render() {
    return (
      <ul>
        {this.state.todos.map(todo => {
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

export default TodoList;
