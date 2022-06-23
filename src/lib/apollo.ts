import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4r7eh550pw501z514500y0u/master",
  cache: new InMemoryCache()
});
