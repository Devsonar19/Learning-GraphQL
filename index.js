import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

//setting up server
const server = new ApolloServer({
    //typeDefs
    //resolvers

})



const { url } = await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log('Server Ready at port', 4000)