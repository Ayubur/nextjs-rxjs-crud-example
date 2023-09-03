import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const getVerifiedToken = (authToken: string) => {
  let token = authToken.split(" ")[1];
  return jwt.verify(token, process.env.NEXTAUTH_SECRET || "NEXTAUTH_SECRET");
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let token = getVerifiedToken("http-x-access-token");

    if (!token) {
      throw new Error();
    }

  } catch (error: any) {
    res.status(401);
    throw new Error("Unauthorized operation");
  }
}