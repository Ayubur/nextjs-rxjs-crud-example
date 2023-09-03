import { NextApiResponse } from "next";

export interface ApiResponse extends NextApiResponse {
  message?: string
}