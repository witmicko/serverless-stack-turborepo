import { NextjsSite, StackContext, Table, use } from "@serverless-stack/resources";
import {Service1Stack} from "./Service1Stack";
import {Service2Stack} from "./Service2Stack";

export function WebsiteStack({ stack, app }: StackContext) {
  // Create the table
  const table = new Table(stack, "Counter", {
    fields: {
      counter: "string",
    },
    primaryIndex: { partitionKey: "counter" },
  });

  const {api1} = use(Service1Stack)
  const {api2} = use(Service2Stack)
  // Create a Next.js site
  const site = new NextjsSite(stack, "Site", {
    path: "frontend",
    environment: {
      // Pass the table details to our app
      REGION: app.region,
      TABLE_NAME: table.tableName,
      NEXT_PUBLIC_SERVICE_1_ENDPOINT: api1.url,
      NEXT_PUBLIC_SERVICE_2_ENDPOINT: api2.url
    },
    
  });

  // Allow the Next.js API to access the table
  site.attachPermissions([table]);

  // Show the site URL in the output
  stack.addOutputs({
    URL: site.url,
  });
}
