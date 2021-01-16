/**
 * Write resolvers to respond to our queries and mutations
 *
 * Be sure to view the link below to see great examples of:
 *  - Creating custom resolvers (e.g. mutation to handle creating a User node and send an automated email)
 *  - Translate to override auto-generated resolvers by using the same name (e.g. createUsers with custom functionality)
 *  - Use of the @cypher directive for any query or mutation (including in type definitions for properties such as relatedPosts)
 *  - Use of the @auth directive for accepting JWTs in the request
 *  - Use of the @exclude directive to exclude automatically generating queries or resolvers for types
 *  - Use of the @autogenerate directive to automatically generate unique values for ID fields
 *
 *  https://www.notion.so/neo4j-graphql-v1-0-0-alpha-2-d47908030d4e4a0c86babbaef63887d0
 */
export const resolvers = {
  Query: {
    async hello(_parent, _args, _context) {
      return `Hello. The current timestamp is ${Date.now()}`
    },
  },
}
