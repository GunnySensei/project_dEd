import { gql } from "@apollo/client";

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      birthday
      sex
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
      sex
      deathFacts {
        _id
        deathText
        createdAt
        reactions {
          _id
          createdAt
          reactionBody
          username
        }
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
      sex
      birthday
      deathFacts {
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

export const QUERY_USERS = gql`
  query Query {
    users {
      _id
      username
      email
      sex
      birthday
      password
      deathFacts {
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
  query deathFacts($username: String!) {
    deathFacts(username: $username) {
      _id
      deathText
      createdAt
      username
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

export const QUERY_DEATHFACT = gql`
  query deathFact($id: ID!) {
    deathFact(_id: $id) {
      _id
      deathText
      createdAt
      username
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

export const QUERY_DONATIONS = gql`
  query getDonations($price: ID) {
    donations(price: $price) {
      _id
      name
      description
      price
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_ALL_DONATIONS = gql`
  {
    donations {
      _id
      name
      description
      price
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($donations: [ID]!) {
    checkout(donations: $donations) {
      session
    }
  }
`;
