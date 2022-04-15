import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!, $birthday: String, $sex: String) {
        addUser(username: $username, email: $email, password: $password, birthday: $birthday, sex: $sex) {
            token
            user {
                _id
                username
                birthday
                sex
            }
        }
    }
`;

export const ADD_DEATHFACT = gql`
    mutation addDeathFact($deathText: String!) {
        addDeathFact(deathText: $deathText) {
            _id
            deathText
            createdAt
            username
            reactions {
                _id
            }
        }
    }
`;

export const ADD_REACTION = gql`
    mutation addReaction($deathFactId: ID!, $reactionBody: String!) {
        addReaction(deathFactId: $deathFactId, reactionBody: $reactionBody) {
            _id
            reactionCount
            reactions {
                _id
                reactions {
                    _id
                    reactionBody
                    createdAt
                    username
                }
            }
        }
    }
`;