import { User } from "@/interfaces";
import { ErrorPayload } from "./ErrorPayload";
import { LoadingPayload } from "./LoadingPayload";

export type UserPayload =
  | { user: User }
  | ErrorPayload
  | LoadingPayload