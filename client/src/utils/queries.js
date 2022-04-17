import { gql } from "@apollo/client";

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      deathFacts {
        _id
        deathText
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      birthday
      sex
    }
  }
`;

export const QUERY_USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      _id
      username
      email
      birthday
      sex
      deathFacts {
        _id
        deathText
        createdAt
        reactionCount
      }
    }
  }
`;

export const QUERY_USERS = gql`
  query Query {
    users {
      _id
      username
      email
      sex
      birthday
      password
      facts {
        _id
        deathText
        createdAt
        username
        reactions {
          _id
        }
      }
    }
  }
`;

export const QUERY_DEATHFACTS = gql`
  query Query {
    deathFacts {
      _id
      deathText
      createdAt
      username
    }
  }
`;

export const QUERY_DEATHFACT = gql`
  query deathFact($_id: ID!) {
    deathFact(_id: $_id) {
      _id
      deathText
      createdAt
      username
      reactionCount
      reaction {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;
