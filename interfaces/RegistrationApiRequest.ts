import { NextApiRequest } from "next";

export interface RegistrationApiRequest extends NextApiRequest {
  body: {
    name: string,
    email: string,
    password: string
  }
}