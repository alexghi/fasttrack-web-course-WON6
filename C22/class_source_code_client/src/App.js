import './App.css';
import client from './data/client'

import {
  ApolloProvider,
} from "@apollo/client";
import BooksOverview from './BooksOverview'

function App() {
  return (
      <ApolloProvider client={client}>
        <div className="App">
           <BooksOverview/>
        </div>
      </ApolloProvider>
  );
}

export default App;
