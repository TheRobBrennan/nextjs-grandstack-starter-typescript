import { makeAugmentedSchema } from "@neo4j/graphql"
import { typeDefs } from "./type-defs"
import { resolvers } from "./resolvers"

export const augmentedSchema = makeAugmentedSchema({
  typeDefs,
  resolvers,
})
