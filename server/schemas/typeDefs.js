// GQL tagged template function
const { gql } = require('apollo-server-express');

// TypeDefs tagged template function.
const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        sex: String
        birthday: String
        password: String
        facts: [DeathFact]
    }

    type Reaction {
        _id: ID
    }

    type DeathFact {
        _id: ID
        deathText: String
        createdAt: String
        username: String
        reactions: [Reaction]
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        deathFacts(username: String!): [DeathFact]
        deathFact(_id: ID!): DeathFact
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, password: String!, email: String!, birthday: String, sex: String): Auth
        addDeathFact(deathText: String!): DeathFact
        addReaction(deathFactId: ID!, reactionBody: String!): DeathFact
    }
    
    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;