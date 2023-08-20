import { Todo } from "@/interfaces";
import axios, { AxiosResponse } from "axios";

const baseApi = process.env.API_BASE_URL;

export const useTodoApi = () => {
  const list = (): Promise<AxiosResponse<Todo>> => {
    return axios.get(`${baseApi}/todos`);
  }

  const create = (todo: Todo): Promise<AxiosResponse<Todo>> => {
    return axios.post(`${baseApi}/todos`, todo);
  }

  const update = (id: number, todo: Todo): Promise<AxiosResponse<Todo>> => {
    return axios.put(`${baseApi}/todos/${id}`, todo);
  }

  const remove = (id: number): Promise<AxiosResponse<Todo>> => {
    return axios.delete(`${baseApi}/todos/${id}`);
  }

  return { list, create, update, remove }
}