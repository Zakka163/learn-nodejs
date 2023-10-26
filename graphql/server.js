const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const gql = require('graphql');
const { v4 } = require('uuid')

let user = [
    { id: v4(), name: 'brachio', email: 'brachio@email.com' },
    { id: v4(), name: 'zakka', email: 'zakka@email.com' }
]


const Schema = gql.buildSchema(`
  type Query {
    getUser: [User!]
    getUserById(id: ID!):User
  }
  type User {
    id: ID!,
    name: String!,
    email: String!
  }
  input UserInput {
    name: String!,
    email: String!
}
type Mutation {
    createUser(input: UserInput): User
    updateUser(id: ID!, input: UserInput): User
   }
`);
const root = {
    Query: {
        getUser: () => {
            return user
        },
        getUserById: (arg) => {
            return user.find((x) => { return x.id == arg.id })
        },
    },
    Mutation:{
        
        createUser: (arg) => {
            const namaid = v4()
            const st = { "id": namaid, "name": arg.input.name, "email": arg.input.email }
            console.log(st);
            user.push({ id: namaid, name: arg.input.name, email: arg.input.email })
            return st
        }
    }
    

}
const app = express();

app.use(
    '/graphql',
    graphqlHTTP({
        schema: Schema,
        rootValue: root,
        graphiql: true
    })
);
app.listen(5000);
console.log('Running a GraphQL API server at http://localhost:5000/graphql');