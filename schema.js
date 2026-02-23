export const typeDefs = `#graphql
    type Game{
        id: ID!
        title:  String!
        platform: [String!]!
    }
    type Review{
        id: ID!
        rating: Int!
        content: String!
    }
    type Author{
        id: ID!
        name: String!
        verified: Boolean!
    }

    type Query{
        games: [Game]
        reviews: [Review]
        authors: [Author]

        singleReview(id: ID!): Review
        singleGame(id: ID!): Game
        singleAuthor(id: ID!): Author
    }

`