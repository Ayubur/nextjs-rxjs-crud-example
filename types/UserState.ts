import { User } from "@/interfaces";
import { ErrorState } from "./ErrorState";
import { LoadingState } from "./LoadingState";

export type UserState = {
  user: User
} & LoadingState & ErrorState