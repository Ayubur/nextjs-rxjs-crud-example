import authenticatedRequestHandler from "lib/middleware/AuthenticatedRequestHandler";
import ensureDBConnection from "config/DB";
import { NextApiRequest } from "next";
import { ApiResponse } from "@/interfaces/ApiResponse";

export default (handler : any) => {
  return async (req: NextApiRequest, res: ApiResponse) => {
    try {

      await ensureDBConnection();

      const route = req?.url;

      console.log(`++ ${req.method} ${route}`);
      console.log(req.body);

      if (route?.includes("/api/a")) {
        await authenticatedRequestHandler(req, res);
      }

      const result = await handler(req, res);

      const statusCode = res.statusCode ? res.statusCode : 200;
      res.status(statusCode).json({
        type: "RESULT",
        message: res.message || "OK",
        result: result,
        error: null,
        code: statusCode,
      });
    } catch (error: any) {
      if (error.statusCode) {
        res.status(error.statusCode);
      }

      const statusCode = res.statusCode ? res.statusCode : 500;

      res.status(statusCode).json({
        type: "ERROR",
        message: error.message,
        result: null,
        error: process.env.ENV_TYPE === "production" ? null : error.stack,
        code: statusCode,
      });
    }
  };
};
