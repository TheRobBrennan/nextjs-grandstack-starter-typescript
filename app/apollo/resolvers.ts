// Write resolvers to respond to our queries and mutations
// https://www.notion.so/neo4j-graphql-v1-0-0-alpha-2-d47908030d4e4a0c86babbaef63887d0
export const resolvers = {
  Query: {
    async hello(_parent, _args, _context) {
      return `Hello. The current timestamp is ${Date.now()}`
    },
  },

  // EXAMPLE: Creating a custom resolver that sends an email while signing up a user in our database
  //      See "Custom Resolvers" in https://www.notion.so/neo4j-graphql-v1-0-0-alpha-2-d47908030d4e4a0c86babbaef63887d0
  // Mutation: {
  //   async signUp(root, { email }, context) {
  //     // Create user using manually entered Cypher
  //     const cypher = "CREATE (u:User {email: $email}) RETURN n"
  //     const params = { email }

  //     const session = context.driver.session()
  //     const userRes = await session.writeTransaction((tx) =>
  //       tx.run(cypher, params)
  //     )
  //     session.close()

  //     // Send email
  //     context.emailService.sendWelcome(email)

  //     return userRes.records[0].get(0)
  //   },
  // },
}
