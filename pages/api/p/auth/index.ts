import { RegistrationApiRequest } from "@/interfaces";
import { login } from "@/lib/services/AuthService";
import { validateLoginRequest } from "@/lib/validators/loginvalidators";
import { NextApiResponse } from "next";
import withRequestResponseHandler from "@/lib/middleware/RequestResponseHandler";

const handler = async (req: RegistrationApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      validateLoginRequest(req, res);
      return login(req, res);
    default:
      res.status(405);
      throw new Error("Method not allowed");
  }
}

export default withRequestResponseHandler(handler);