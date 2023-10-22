import { Elysia, t } from "elysia";
import { adaptElysiaRouter } from "../adapters/elysia-router.ts";
import { makeSignUpController } from "../controllers/signupController";

export default new Elysia().post(
  "/signup",
  adaptElysiaRouter(makeSignUpController()),
  {
    body: t.Object({
      username: t.String(),
      password: t.String(),
    }),
  }
);