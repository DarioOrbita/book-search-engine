const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String
        email: String
        bookCount: Int
        savedBooks [Book]
    }

    type Book {
        bookId: ID!
        authors: [String]
        description: String
        title: String!
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email, password): Auth
        addUser(username, email, password): Auth
        saveBook(Book*probably not how this works, check later*): User
        
    }
`;


module.exports = typeDefs;