// Write resolvers to respond to our queries and mutations
// https://www.notion.so/neo4j-graphql-v1-0-0-alpha-2-d47908030d4e4a0c86babbaef63887d0
export const resolvers = {
  Query: {
    async hello(_parent, _args, _context) {
      return `Hello. The current timestamp is ${Date.now()}`
    },
  },
}
