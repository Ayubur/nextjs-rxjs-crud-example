import { User } from "@/interfaces";
import { UserPayload, UserState } from "@/types";
import { BehaviorSubject } from "rxjs"

const initialState = {
  user: null,
  loading: false,
  error: ""
}

const userSubject = new BehaviorSubject<any>(initialState);

export const useUserObservable = () => {
  const create = (user: User) => {
    setNextState({ user, error: "" })
  }

  const loading = (flag: boolean) => {
    setNextState({ loading: flag });
  }

  const error = (message: string) => {
    setNextState({ error: message })
  }

  const setNextState = (payload: UserPayload) => {
    const state = userSubject.getValue();
    userSubject.next({ ...state, ...payload });
  }

  const getObservable = () => {
    return userSubject;
  }

  return {
    create,
    loading,
    error,
    getObservable
  }
}

