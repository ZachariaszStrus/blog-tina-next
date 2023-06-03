import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'a678b1ffb4f84d036bfec42f745c648f616d51cc', queries });
export default client;
  