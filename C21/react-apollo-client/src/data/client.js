import {
	ApolloClient,
	InMemoryCache
} from "@apollo/client";

export default new ApolloClient({
	uri: 'https://48p1r2roz4.sse.codesandbox.io',
	cache: new InMemoryCache()
});
