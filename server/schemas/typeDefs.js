// GQL tagged template function
const { gql } = require('apollo-server-express');

// TypeDefs tagged template function.
const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        password: String
        clock: Int
        facts: [DeathFact]
    }

    type Reaction {
        _id: ID
        reactionBody: String
        createdAt: String
        username: String
    }
    

`;