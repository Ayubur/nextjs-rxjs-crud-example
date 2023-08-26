import { User } from "@/interfaces";
import { LoginPayload, RegistrationPayload } from "@/types";
import axios, { AxiosResponse } from "axios";

const baseApi = process.env.API_BASE_URL;

export const useUserApi = () => {
  const login = (payload: LoginPayload): Promise<AxiosResponse<User>> => {
    return axios.post(`${baseApi}/login`, payload);
  }

  const register = (payload: RegistrationPayload): Promise<AxiosResponse<User>> => {
    return axios.post(`${baseApi}/register`, payload);
  }

  return { login, register };
}