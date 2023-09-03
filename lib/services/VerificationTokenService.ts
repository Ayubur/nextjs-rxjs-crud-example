import uuid from "uuid";
import jwt from "jsonwebtoken";
import { MAX_SESSION_HOUR } from "../constants/ApplicationConstants";

export const generateJwtToken = async (user: { id: string, email: string }) => {
  const { id, email } = user;
  const accessId = uuid.v4();
  const jwtToken = jwt.sign(
    {
      id,
      email,
      accessId
    },
    process.env.NEXTAUTH_SECRET || "NEXTAUTH_SECRET",
    {
      expiresIn: `${MAX_SESSION_HOUR}h`
    }
  );

  return jwtToken;
}