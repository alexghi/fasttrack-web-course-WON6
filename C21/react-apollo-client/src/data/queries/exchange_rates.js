import { gql } from '@apollo/client'

const EXCHANGE_RATES = gql`
  query getCurrency {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;


export default EXCHANGE_RATES;
