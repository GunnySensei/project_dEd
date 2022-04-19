// GQL tagged template function
const { gql } = require("apollo-server-express");

// TypeDefs tagged template function.
const typeDefs = gql`

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
    }

    type Donation {
        _id: ID
        name: String
        description: String
        image: String
        price: Float
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
      donations: [Donation]
      donation(_id: ID!): Donation
      checkout(donations: [ID]!): Checkout
  }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, password: String!, email: String!, birthday: String!, sex: String!): Auth
        addDeathFact(deathText: String!): DeathFact
        addReaction(deathFactId: ID!, reactionBody: String!): DeathFact
    }

    type Checkout {
        session: ID
    }
    
    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;
