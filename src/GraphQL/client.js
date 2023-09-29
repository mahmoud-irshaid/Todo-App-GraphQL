import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors }) => {
    if (graphqlErrors) {
        graphqlErrors.map(({ message }) => {
            alert(`Graphql error ${message}`);
        });
    }
});

const link = from([
    errorLink,
    new HttpLink({ uri: "https://graphqlzero.almansi.me/api" }),
]);

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
});