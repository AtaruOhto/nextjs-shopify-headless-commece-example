; import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: "https://graphql.myshopify.com/api/2021-07/graphql.json",
    headers: {
      'X-Shopify-Storefront-Access-Token': "ecdc7f91ed0970e733268535c828fbbe",
    },
  }),
  cache: new InMemoryCache(),
});
