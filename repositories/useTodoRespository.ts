import { useTodoApi } from "@/apis"
import { Todo } from "@/interfaces";
import { useTodoObservable } from "@/observables/useTodoObservables";
import { getResponseErrorMessage } from "@/utils/getResponseErrorMessage";
import { handleAxiosApi } from "@/utils/handleAxiosApi";

export const useTodoRepository = () => {
  const todoApi = useTodoApi();
  const todoObservable = useTodoObservable();

  const list = async () => {
    try {
      todoObservable.listing(true);
      const todos = await handleAxiosApi<Todo[]>(todoApi.list());
      todoObservable.list(todos);
    } catch (error) {
      todoObservable.error(getResponseErrorMessage(error));
    } finally {
      todoObservable.listing(false);
    }
  }

  const create = async (todo: Todo) => {
    try {
      todoObservable.creating(true);
      const createdTodo = await handleAxiosApi<Todo>(todoApi.create(todo));
      todoObservable.create(createdTodo);
    } catch (error) {
      todoObservable.error(getResponseErrorMessage(error));
    } finally {
      todoObservable.creating(false);
    }
  }

  const update = async (id: number, todo: Todo) => {
    try {
      todoObservable.updating(true);
      const updatedTodo = await handleAxiosApi<Todo>(todoApi.update(id, todo));
      todoObservable.update(id, updatedTodo);
    } catch (error) {
      todoObservable.error(getResponseErrorMessage(error));
    } finally {
      todoObservable.updating(false);
    }
  }

  const remove = async (id: number) => {
    try {
      todoObservable.removing(true);
      await handleAxiosApi(todoApi.remove(id));
      todoObservable.remove(id);
    } catch (error) {
      todoObservable.error(getResponseErrorMessage(error));
    } finally {
      todoObservable.removing(false);
    }
  }

  const getTodoObservable = () => todoObservable.getObservable();

  return {
    list,
    create,
    update,
    remove,
    getTodoObservable
  }
}