// Write resolvers to respond to our queries and mutations
export const resolvers = {
  Query: {
    hello: (_parent, _args, _context) =>
      `Hello. The current timestamp is ${Date.now()}`,
  },
}
