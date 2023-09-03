import { RegistrationApiRequest } from "@/interfaces";
import { register } from "@/lib/services/AuthService";
import { validatesignuprequest } from "@/lib/validators/signupvalidator";
import { NextApiResponse } from "next";
import withRequestResponseHandler from "@/lib/middleware/RequestResponseHandler";

const handler = async (req: RegistrationApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      validatesignuprequest(req, res);
      return await register(req, res);
    default:
      res.status(405);
      throw new Error("Method not allowed");
  }
}

export default withRequestResponseHandler(handler);

