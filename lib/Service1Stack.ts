import { StackContext, Api } from "@serverless-stack/resources";

export function Service1Stack({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "src/services/service1/lambda.handler",
    },
  });
  stack.addOutputs({
    Service1Endpoint: api.url
  });
  return {api1: api};
}
