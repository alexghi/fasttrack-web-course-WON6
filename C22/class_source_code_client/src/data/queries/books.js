import { gql } from '@apollo/client'

const BOOKS = gql`
  query getMeAllTheBooks {
    books {
      title
      author
    }
  }
`;


export default BOOKS;
