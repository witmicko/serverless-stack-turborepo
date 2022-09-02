import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import {log} from 'logger'

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  console.log(`>>>>> 11111`);
  log(`>>>>> 22222`);
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Hello, World! service1 Your request was received at ${event.requestContext.time}.`,
  };
};
