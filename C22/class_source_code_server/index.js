const { ApolloServer, gql } = require('apollo-server');
const axios = require('axios').default;

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  type Jobs {
    id: ID
    title: String
    description: String
    company: String
    location: String
    url: String
  }

  type Movies {
    id: ID
    title: String
    description: String
    url: String
    price: Int
  }

  type SpacePictures {
    copyright: String
    url: String
    title: String
    explanation: String
    date: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    jobs: [Jobs]
    movies: [Movies]
    space_pictures: [SpacePictures]
  }
`;

const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
    },
    {
        title: 'The Lord of the Rings',
        author: 'J. R. R. Tolkien',
    },
    {
        title: 'The Hobbit',
        author: 'J. R. R. Tolkien',
    }
];

const movies = [
    {
        id: 1,
        title: 'The Shawshank Redemption',
        description: 'Two imprisoned',
        url: 'https://www.youtube.com/watch?v=6hB3S9bIaco',
        price: 10

    },
    {
        id: 2,
        title: 'The Godfather',
        description: 'The aging patriarch',
        url: 'https://www.youtube.com/watch?v=sY1S34973zA',
        price: 20
    },
    {
        id: 3,
        title: 'The Godfather: Part II',
        description: 'The early life and career of',
        url: 'https://www.youtube.com/watch?v=20-ZWzXkcMk',
        price: 30
    }, 
    {
        id: 4,
        title: 'The Dark Knight',
        description: 'When the menace known as the Joker emerges from his mysterious past',
        url: 'https://www.youtube.com/watch?v=EXeTw3wC0y8',
        price: 30
    }
];

const jobs = [
    {
        id: 1,
        title: 'Software Engineer',
        description: 'Full Stack Developer',
        company: 'Google',
        location: 'Mountain View, CA',
        url: 'https://www.google.com/'
    }, 
    {
        id: 2,
        title: 'Software Engineer',
        description: 'Full Stack Developer',
        company: 'Facebook',
        location: 'Menlo Park, CA',
    },
    {
        id: 3,
        title: 'HR',
        description: 'HR',
        company: 'Apple',
        location: 'Cupertino, CA',
    }
]

const resolvers = {
    Query: {  
        books: () => books,
        movies: () => movies,
        jobs: () => jobs,
        space_pictures: () => {
            // your API KEY goes here
            return axios.get('https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY&start_date=2022-06-01')
                .then(res => res.data)
            
        }
    }
}


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
  });
  
  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
