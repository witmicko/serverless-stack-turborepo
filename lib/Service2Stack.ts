import { StackContext, Api } from "@serverless-stack/resources";

export function Service2Stack({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "src/services/service1/lambda.handler",
    },
  });
  stack.addOutputs({
    Service2Endpoint: api.url
  });
  return {api2: api};
}