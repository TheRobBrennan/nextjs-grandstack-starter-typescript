import { initializeApollo, useApollo } from "./client"

describe("Apollo client", () => {
  describe("initializeApollo", () => {
    it("is defined", () => {
      expect(initializeApollo).toBeDefined()
    })
    describe("when executed without any parameters", () => {
      it("should return an initialized Apollo client with an empty initial state", () => {
        const result = initializeApollo()
        const { version, localState } = result
        const expectedVersion = "local"
        const expectedState = {}

        expect(version).toEqual(expectedVersion)
        expect(localState.cache.data.data).toEqual(expectedState)
      })
    })
    describe("when executed with a null initialState", () => {
      it("should return an initialized Apollo client with an empty initial state", () => {
        const result = initializeApollo(null)
        const { version, localState } = result
        const expectedVersion = "local"
        const expectedState = {}

        expect(version).toEqual(expectedVersion)
        expect(localState.cache.data.data).toEqual(expectedState)
      })
    })
    describe("when executed with a defined object as initialState", () => {
      it("should return an Apollo client with the supplied state", () => {
        const mockInitialState = { aKey: "aValue" }

        const result = initializeApollo(mockInitialState)
        const { version, localState } = result
        const expectedVersion = "local"
        const expectedState = mockInitialState

        expect(version).toEqual(expectedVersion)
        expect(localState.cache.data.data).not.toEqual({})
        expect(localState.cache.data.data).toEqual(expectedState)
      })
    })
  })
  describe("useApollo", () => {
    it("is defined", () => {
      expect(useApollo).toBeDefined()
    })
    // REMEMBER: Hooks need to be tested within functional components directly; not as standalone code
  })
})
