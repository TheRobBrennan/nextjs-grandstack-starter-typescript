// Describe our GraphQL schema with type definitions
export const typeDefs = `
  type Movie {
    title: String
    year: Int
    imdbRating: Float
    genres: [Genre] @relationship(type: "IN_GENRE", direction: "OUT")
  }

  type Genre {
    name: String
    movies: [Movie] @relationship(type: "IN_GENRE", direction: "IN")
  }

  type Query {
    """
    A sample query to verify that our GraphQL server is online.

    It returns a friendly greeting with the current timestamp.
    """
    hello: String!,
  }

`

// EXAMPLE: This is what the deprecated Neo4j labs implementation used for typeDefs
//          https://github.com/neo4j-graphql/neo4j-graphql-js
const typeDefsForNeo4jGraphqlJs = `
  type User {
    userId: ID!
    name: String
    reviews: [Review] @relation(name: "WROTE", direction: "OUT")
    avgStars: Float
      @cypher(
        statement: "MATCH (this)-[:WROTE]->(r:Review) RETURN toFloat(avg(r.stars))"
      )
    numReviews: Int
      @cypher(statement: "MATCH (this)-[:WROTE]->(r:Review) RETURN COUNT(r)")
    recommendations(first: Int = 3): [Business]
      @cypher(
        statement: "MATCH (this)-[:WROTE]->(r:Review)-[:REVIEWS]->(:Business)<-[:REVIEWS]-(:Review)<-[:WROTE]-(:User)-[:WROTE]->(:Review)-[:REVIEWS]->(rec:Business) WHERE NOT EXISTS( (this)-[:WROTE]->(:Review)-[:REVIEWS]->(rec) ) WITH rec, COUNT(*) AS num ORDER BY num DESC LIMIT $first RETURN rec"
      )
  }

  type Business {
    businessId: ID!
    name: String!
    address: String
    city: String
    state: String
    location: Point
    avgStars: Float
      @cypher(
        statement: "MATCH (this)<-[:REVIEWS]-(r:Review) RETURN coalesce(avg(r.stars),0.0)"
      )
    reviews: [Review] @relation(name: "REVIEWS", direction: "IN")
    categories: [Category] @relation(name: "IN_CATEGORY", direction: "OUT")
  }

  type Review {
    reviewId: ID!
    stars: Float
    text: String
    date: Date
    business: Business @relation(name: "REVIEWS", direction: "OUT")
    user: User @relation(name: "WROTE", direction: "IN")
  }

  type Category {
    name: ID!
    businesses: [Business] @relation(name: "IN_CATEGORY", direction: "IN")
  }

  type RatingCount {
    stars: Float!
    count: Int!
  }

  type Mutation {
    mergeBusinessCategory(categories: [String!]!, businessId: ID!): Business
      @cypher(
        statement: "MATCH (b:Business {businessId: $businessId}) UNWIND $categories AS cat MERGE (c:Category {name: cat}) MERGE (b)-[:IN_CATEGORY]->(c) RETURN b"
      )
  }

  type Query {
    """
    A sample query to verify that our GraphQL server is online.

    It returns a friendly greeting with the current timestamp.
    """
    hello: String!,
    
    userCount: Int! @cypher(statement: "MATCH (u:User) RETURN COUNT(u)")
    ratingsCount: [RatingCount]
      @cypher(
        statement: "MATCH (r:Review) WITH r.stars AS stars, COUNT(*) AS count ORDER BY stars RETURN {stars: stars, count: count}"
      )
  }
`
