const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    orders: [Order]
}

type Auth {
    token: ID
    user: User
}

`;

module.exports = typeDefs
