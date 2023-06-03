import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'a5f6c1422cd27854e0f4370e2e45e387052ff4ea', queries });
export default client;
  