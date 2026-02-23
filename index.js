import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import _db from './_db.js'
import { typeDefs } from './schema.js';

const resolvers = {
    Query: {
        //FETCH ALL
        games() {
            return _db.games
        },
        reviews(){
            return _db.reviews
        },
        authors(){
            return _db.authors
        },
        
        //FETCH SINGLE
        singleReview(_, args){ //(parent, args, context)
            return _db.reviews.find((review) => review.id === args.id)
        },
        singleGame(_, args){ //(parent, args, context)
            return _db.games.find((game) => game.id === args.id)
        },
        singleAuthor(_, args){ //(parent, args, context)
            return _db.authors.find((author) => author.id === args.id)
        },
    },

    //NESTED
    Game:{
        reviews(parent){
            return _db.reviews.filter((r) => r.game_id === parent.id)
        }
    },
    Author:{
        reviews(parent){
            return _db.reviews.filter((r) => r.author_id === parent.id)
        }
    },
    Review:{
        game(parent){
            return _db.games.find((g) => g.id === parent.game_id)
        },
        author(parent){
            return _db.authors.find((a) => a.id === parent.author_id)
        }
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