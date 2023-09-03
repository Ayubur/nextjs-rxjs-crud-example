import { RegistrationApiRequest } from "@/interfaces";
import { NextApiResponse } from "next";

export const validateLoginRequest = (req: RegistrationApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields required");
  }
}