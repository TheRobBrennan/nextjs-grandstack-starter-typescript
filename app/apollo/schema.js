import { makeAugmentedSchema } from "neo4j-graphql-js"
import { typeDefs } from "./type-defs"
import { resolvers } from "./resolvers"

export const augmentedSchema = makeAugmentedSchema({
  typeDefs,
  resolvers,
})
