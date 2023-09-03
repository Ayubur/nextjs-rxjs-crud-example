import { RegistrationApiRequest } from "@/interfaces";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextApiResponse } from "next";
import { generateJwtToken } from "./VerificationTokenService";

export const register = async (req: RegistrationApiRequest, res: NextApiResponse) => {
  const { name, email, password } = req.body;
  const salt = await bcrypt.getSalt("10");
  const hashedPassword = await bcrypt.hash(password, salt);

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("Email already exists");
  }

  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  if (!user) {
    res.status(400);
    throw new Error("Invalid user data");
  }

  return {
    accessToken: await generateJwtToken({
      id: user._id,
      email: user.email
    })
  }

}

export const login = async (req: RegistrationApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !bcrypt.compare(password, user.password)) {
    res.status(400);
    throw new Error("Invalid credentials");
  }

  return {
    accessToken: await generateJwtToken({
      id: user._id,
      email: user.email
    })
  }

}
