import { resolvers } from "./resolvers"

describe("Our GraphQL resolvers should contain", () => {
  describe("A Query object", () => {
    const { Query } = resolvers

    it("that has been defined", () => {
      expect(Query).toBeDefined()
    })

    describe("with a custom 'hello' function", () => {
      const { hello } = Query
      it("that has been defined", () => {
        expect(hello).toBeDefined()
      })
      it("that returns a string when executed", async () => {
        const result = await hello(null, null, null)
        expect(typeof result).toEqual("string")
      })
    })
  })
})
