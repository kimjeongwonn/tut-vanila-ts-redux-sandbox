export interface TodoState {
  todo: string;
  id?: number;
}

export interface TodoReducer {
  (state: TodoState, action: TodoAction): TodoState;
}

export type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>;
