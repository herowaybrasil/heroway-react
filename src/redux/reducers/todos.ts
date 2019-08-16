const INITIAL_STATE: any = {
  todos: [
    { id: 1, description: "Entregar desafio HTML/CSS", done: false },
    { id: 2, description: "Estudar Javascript", done: true },
    { id: 3, description: "Estudar React", done: false }
  ]
}

// REDUCER
export default function todosReducer(state = INITIAL_STATE, action: any) {
  switch(action.type) {
    case 'TOGGLE_TODO':
      return {
        todos: toggleTodoById(state, action.payload)
      };

    default:
      return state;
  }
}

function toggleTodoById(state: any, todoId: number) {
  const todos = state.todos.map((todo: any) => {
    if (todoId === todo.id) {
      todo.done = !todo.done;
    }

    return todo;
  });

  return todos;
};

// ACTION
export const toggleTodo = (todoId: number) => {
  return {
    type: 'TOGGLE_TODO',
    payload: todoId
  }
}