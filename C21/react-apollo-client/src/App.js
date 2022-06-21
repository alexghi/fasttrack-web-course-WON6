import './App.css';
import client from './data/client'

import {
  ApolloProvider,
} from "@apollo/client";
import ExchangeRates from './ExchangeRates'
import RightSide from './RightSide'

function App() {
  return (
      <ApolloProvider client={client}>
        <div className="App">
           <ExchangeRates/>
            <RightSide/>
        </div>
      </ApolloProvider>
  );
}

export default App;
