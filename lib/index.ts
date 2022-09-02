import {Service1Stack} from "./Service1Stack";
import {Service2Stack} from "./Service2Stack";
import {WebsiteStack} from "./WebsiteStack";

import { App, use } from "@serverless-stack/resources";


export default function main(app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    timeout: 300,
    // srcPath: "services",
    // bundle: {
    //   format: "esm",
    // },
  });


  app
  .stack(Service1Stack)
  .stack(Service2Stack)  
  .stack(WebsiteStack);
}

