/* istanbul ignore file */
import React from "react"
import TestRenderer, { act } from "react-test-renderer"
import { MockedProvider } from "@apollo/client/testing"

import RatingsChart, { GET_DATA_QUERY } from "./RatingsChart"

describe("GRANDstack RatingsChart component", () => {
  describe("when invoked WITHOUT a specific height or size", () => {
    it("should render the Ratings Distribution chart after receiving data", async () => {
      // Define our Apollo request
      const renderRequest = {
        request: {
          query: GET_DATA_QUERY,
          variables: {},
        },
        result: {
          data: {
            ratingsCount: [
              { stars: 3, count: 2, __typename: "RatingCount" },
              { stars: 4, count: 4, __typename: "RatingCount" },
              { stars: 5, count: 6, __typename: "RatingCount" },
            ],
          },
        },
      }

      // Define our mock response(s)
      const gqlMocks = [renderRequest]

      // REVISIT: Known untestable design using Recharts 🥺
      console.warn(
        `This is untestable due to a bug with testing the ResizeDetector component within the Recharts third-party library 🥺`
      )

      // Test
      // const component = TestRenderer.create(
      //   <MockedProvider mocks={gqlMocks} addTypename={false}>
      //     <RatingsChart />
      //   </MockedProvider>
      // )

      // Advance to the next tick in the event loop so our chart can render
      // await act(() => {
      //   return new Promise((resolve) => {
      //     setTimeout(resolve, 0)
      //   })
      // })

      // Verify
    })
  })

  describe("when invoked WITH a specific height and size", () => {
    it("should render the Ratings Distribution chart after receiving data", async () => {
      // Define our Apollo request
      const renderRequest = {
        request: {
          query: GET_DATA_QUERY,
          variables: {},
        },
        result: {
          data: {
            ratingsCount: [
              { stars: 3, count: 2, __typename: "RatingCount" },
              { stars: 4, count: 4, __typename: "RatingCount" },
              { stars: 5, count: 6, __typename: "RatingCount" },
            ],
          },
        },
      }

      // Define our mock response(s)
      const gqlMocks = [renderRequest]

      // REVISIT: Known untestable design using Recharts 🥺
      console.warn(
        `This is untestable due to a bug with testing the ResizeDetector component within the Recharts third-party library 🥺`
      )

      // Test
      // const component = TestRenderer.create(
      //   <MockedProvider mocks={gqlMocks} addTypename={false}>
      //     <RatingsChart height={300} width={300} />
      //   </MockedProvider>
      // )

      // Advance to the next tick in the event loop so our chart can render
      // await act(() => {
      //   return new Promise((resolve) => {
      //     setTimeout(resolve, 0)
      //   })
      // })

      // Verify
    })
  })
})
