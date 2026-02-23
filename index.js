import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import _db from './_db.js'
import { typeDefs } from './schema.js';

const resolvers = {
    Query: {
        games() {
            return _db.games
        },
        reviews(){
            return _db.reviews
        },
        authors(){
            return _db.authors
        },

        singleReview(_, args){ //(parent, args, context)
            return _db.reviews.find((review) => review.id === args.id)
        },
        singleGame(_, args){ //(parent, args, context)
            return _db.games.find((game) => game.id === args.id)
        },
        singleAuthor(_, args){ //(parent, args, context)
            return _db.authors.find((author) => author.id === args.id)
        },
    }
}

//setting up server
const server = new ApolloServer({
    typeDefs,
    resolvers

})



const { url } = await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log('Server Ready at port', 4000)