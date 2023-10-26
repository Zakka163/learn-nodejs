import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { v4 } from 'uuid';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
let user = [
    { id: v4(), name: 'brachio', email: 'brachio@email.com' },
    { id: v4(), name: 'zakka', email: 'zakka@email.com' }
]
const typeDefs = ` type Query {
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
`;
const resolvers = {
    Query: {
        getUser: () => {
            return user
        },
        getUserById: (parent, args, contextValue, info) => {
            console.log("args: "+args);
            console.log("parents :"+parent);
            return user.find((x) => { return x.id == args.id })
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
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);