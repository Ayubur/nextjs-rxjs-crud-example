import { RegistrationApiRequest } from "@/interfaces";
import { NextApiResponse } from "next";

export const validatesignuprequest = (req: RegistrationApiRequest, res: NextApiResponse) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All field required");
  }
}