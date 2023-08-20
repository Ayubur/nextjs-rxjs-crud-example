import { Todo } from "@/interfaces"
import { FlagState } from "./FlagState";
import { ErrorState } from "./ErrorState";

export type TodosState = {
  todos: Todo[];
} & FlagState & ErrorState;