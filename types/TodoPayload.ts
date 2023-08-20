import { Todo } from "@/interfaces";
import { ErrorPayload } from "./ErrorPayload";
import { FlagPayload } from "./FlagPayload";

export type TodoPayload =
  | { todos: Todo[] }
  | { todo: Todo }
  | { id: number; todo: Todo }
  | { id: number }
  | ErrorPayload
  | FlagPayload;