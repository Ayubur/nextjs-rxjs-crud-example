import { Todo } from "@/interfaces";
import { TodoPayload, TodosState } from "@/types"
import { BehaviorSubject } from "rxjs"

const initialState = {
  todos: [],
  listing: false,
  creating: false,
  updating: false,
  removing: false,
  error: ""
}

const todoSubject = new BehaviorSubject<TodosState>(initialState);

export const useTodoObservable = () => {
  const list = (todos: Todo[]) => {
    setNextState({ todos, error: "" });
  }


  const listing = (flag: boolean) => {
    setNextState({ listing: flag });
  }

  const create = (todo: Todo) => {
    const todos = [...todoSubject.getValue().todos, todo];
    setNextState({ todos, error: "" });
  }

  const creating = (flag: boolean) => {
    setNextState({ creating: flag });
  }

  const update = (id: number, todo: Todo) => {
    let todos = [...todoSubject.getValue().todos];
    todos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, ...todo };
      }

      return item;
    })
    setNextState({ todos, error: "" })
  }

  const updating = (flag: boolean) => {
    setNextState({ updating: flag });
  }

  const remove = (id: number) => {
    const todos = [...todoSubject.getValue().todos].filter(todo => todo.id !== id);
    setNextState({ todos, error: "" });
  }

  const removing = (flag: boolean) => {
    setNextState({ removing: flag });
  }

  const error = (message: string) => {
    setNextState({ error: message });
  }

  const setNextState = (payload: TodoPayload) => {
    const state = todoSubject.getValue();
    todoSubject.next({ ...state, ...payload });
  }
  const getObservable = () => {
    return todoSubject;
  }
  return {
    list,
    listing,
    create,
    creating,
    update,
    updating,
    remove,
    removing,
    error,
    getObservable
  }
}
