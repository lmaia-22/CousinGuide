import { Context } from "elysia";

export interface Controller {
  handle(httpRequest: any): Promise<any>;
}

export function adaptElysiaRouter(controller: Controller) {
  return async (context: Context) => {
    const { statusCode, data } = await controller.handle({
      ...(context.body ?? {}),
    });
    context.set.status = statusCode;
    return data;
  };
}