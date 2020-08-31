import React from "react"
import { mount } from "enzyme"

import RatingsChart, { GET_DATA_QUERY } from "./RatingsChart"
import { MockedProvider } from "@apollo/client/testing"
import { act } from "@testing-library/react"

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

      const wrapper = mount(
        <MockedProvider mocks={gqlMocks} addTypename={true}>
          <RatingsChart />
        </MockedProvider>
      )

      // Verify loading state
      expect(wrapper.html()).toContain("Loading")

      // Advance to the next tick in the event loop so our chart can render
      await act(() => {
        return new Promise((resolve) => {
          setTimeout(resolve, 0)
        })
      })
      wrapper.update()

      // Verify our chart has rendered as expected
      expect(wrapper.html()).toMatchSnapshot()
    })
    it("should display an error message if our request resulted in an error", async () => {
      // Define our Apollo request
      const renderRequest = {
        request: {
          query: GET_DATA_QUERY,
          variables: {},
        },
        error: new Error("Uh oh. Something bad happened."),
      }

      // Define our mock response(s)
      const gqlMocks = [renderRequest]

      const wrapper = mount(
        <MockedProvider mocks={gqlMocks} addTypename={true}>
          <RatingsChart />
        </MockedProvider>
      )

      // Verify loading state
      expect(wrapper.html()).toContain("Loading")

      // Advance to the next tick in the event loop so our chart can render
      await act(() => {
        return new Promise((resolve) => {
          setTimeout(resolve, 0)
        })
      })
      wrapper.update()

      // Result
      expect(wrapper.html()).toContain("Error")
      expect(wrapper.html()).not.toContain("Ratings Distribution")
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

      const wrapper = mount(
        <MockedProvider mocks={gqlMocks} addTypename={true}>
          <RatingsChart height={300} width={300} />
        </MockedProvider>
      )

      // Verify loading state
      expect(wrapper.html()).toContain("Loading")

      // Advance to the next tick in the event loop so our chart can render
      await act(() => {
        return new Promise((resolve) => {
          setTimeout(resolve, 0)
        })
      })
      wrapper.update()

      // Verify our chart has rendered as expected
      expect(wrapper.html()).toMatchSnapshot()
    })
    it("should display an error message if our request resulted in an error", async () => {
      // Define our Apollo request
      const renderRequest = {
        request: {
          query: GET_DATA_QUERY,
          variables: {},
        },
        error: new Error("Uh oh. Something bad happened."),
      }

      // Define our mock response(s)
      const gqlMocks = [renderRequest]

      const wrapper = mount(
        <MockedProvider mocks={gqlMocks} addTypename={true}>
          <RatingsChart height={300} width={300} />
        </MockedProvider>
      )

      // Verify loading state
      expect(wrapper.html()).toContain("Loading")

      // Advance to the next tick in the event loop so our chart can render
      await act(() => {
        return new Promise((resolve) => {
          setTimeout(resolve, 0)
        })
      })
      wrapper.update()

      // Result
      expect(wrapper.html()).toContain("Error")
      expect(wrapper.html()).not.toContain("Ratings Distribution")
    })
  })
})
