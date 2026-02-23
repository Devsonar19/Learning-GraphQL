export const typeDefs = `#graphql
    type Game{
        id: ID!
        title:  String!
        platform: [String!]!

        reviews:[Review!]
    }
    type Review{
        id: ID!
        rating: Int!
        content: String!

        game: Game!
        author: Author!
    }
    type Author{
        id: ID!
        name: String!
        verified: Boolean!

        reviews: [Review!]
    }

    type Query{
        games: [Game]
        reviews: [Review]
        authors: [Author]

        singleReview(id: ID!): Review
        singleGame(id: ID!): Game
        singleAuthor(id: ID!): Author
    }

    type Mutation{
        addGame(game: AddGameInput!): Game
        deleteGame(id: ID!) : [Game]
    }

    input AddGameInput{
        title: String!,
        platform: [String!]!
    }


`