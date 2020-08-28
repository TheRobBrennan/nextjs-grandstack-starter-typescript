import { createTestClient } from "apollo-server-testing"
import { apolloServer } from "../../pages/api/graphql"

describe("Our Apollo Server", () => {
  it("should be defined", () => {
    expect(apolloServer).toBeDefined()
  })
  it("should execute a simple test query", async () => {
    // Setup a test query against our Apollo Server
    const { query } = createTestClient(apolloServer)
    const HELLO_QUERY = `
    {
        hello
    }
    `

    // Execute our query
    const response = await query({ query: HELLO_QUERY })

    console.log(`response: ${JSON.stringify(response, null, 2)}`)
  })
})
