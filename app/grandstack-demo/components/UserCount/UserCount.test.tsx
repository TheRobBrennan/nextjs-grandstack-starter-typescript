import React from "react"
import TestRenderer, { act } from "react-test-renderer"
import { MockedProvider } from "@apollo/client/testing"

import UserCount, { GET_USER_COUNT_QUERY } from "./UserCount"

describe("GRANDstack UserCount component", () => {
  it("should render without an error when loading data", async () => {
    const expectedTotalUsers = 4

    // Define our Apollo request
    const renderRequest = {
      request: {
        query: GET_USER_COUNT_QUERY,
        variables: {},
      },
      result: {
        data: { userCount: expectedTotalUsers },
      },
    }

    // Define our mock response(s)
    const gqlMocks = [renderRequest]

    // Render component
    const component = TestRenderer.create(
      <MockedProvider mocks={gqlMocks} addTypename={false}>
        <UserCount />
      </MockedProvider>
    )

    // NOTE: We are NOT advancing to the next tick in the event loop; we expect to see a loading state on the first render

    // Verify loading state
    expect(component.toJSON()).toMatchSnapshot()
  })

  it("should render the Total Users chart after receiving data", async () => {
    const expectedTotalUsers = 4

    // Define our Apollo request
    const renderRequest = {
      request: {
        query: GET_USER_COUNT_QUERY,
        variables: {},
      },
      result: {
        data: { userCount: expectedTotalUsers },
      },
    }

    // Define our mock response(s)
    const gqlMocks = [renderRequest]

    // Render component
    const component = TestRenderer.create(
      <MockedProvider mocks={gqlMocks} addTypename={false}>
        <UserCount />
      </MockedProvider>
    )

    // Advance to the next tick in the event loop so our chart can render
    await act(() => {
      return new Promise((resolve) => {
        setTimeout(resolve, 0)
      })
    })

    // Generate our result string
    const p = component.root.findAllByType("p")
    const result = p
      .map((obj) => {
        return obj.children
      })
      .join(" ")

    // Verify success state
    expect(result).toContain(`${expectedTotalUsers} users found`)
  })

  describe("should display an error message if", () => {
    it("there is a network request failure", async () => {
      // Define our Apollo request
      const renderRequest = {
        request: {
          query: GET_USER_COUNT_QUERY,
          variables: {},
        },
        error: new Error("Simulated network or HTTP error"),
      }

      // Define our mock response(s)
      const gqlMocks = [renderRequest]

      // Verify success state
      const component = TestRenderer.create(
        <MockedProvider mocks={gqlMocks} addTypename={false}>
          <UserCount />
        </MockedProvider>
      )

      // Advance to the next tick in the event loop so our chart can render
      await act(() => {
        return new Promise((resolve) => {
          setTimeout(resolve, 0)
        })
      })

      // Verify
      const tree = component.toJSON()
      expect(tree.children).toContain("Simulated network or HTTP error")
    })
    it("our GraphQL server successfully processed our request and has returned with one or more error(s) in the result", async () => {
      // Define our Apollo request
      const renderRequest = {
        request: {
          query: GET_USER_COUNT_QUERY,
          variables: {},
        },
        result: {
          // REVISIT: Create a pull request - errors should be able to be defined on the GraphQL result object because it can contain data and errors
          //          https://www.apollographql.com/docs/react/development-testing/testing/#graphql-errors
          errors: [
            new Error("Simulated GraphQL server response with an error"),
          ],
        },
      }

      // Define our mock response(s)
      const gqlMocks = [renderRequest]

      // Verify success state
      const component = TestRenderer.create(
        <MockedProvider mocks={gqlMocks} addTypename={false}>
          <UserCount />
        </MockedProvider>
      )

      // Advance to the next tick in the event loop so our chart can render
      await act(() => {
        return new Promise((resolve) => {
          setTimeout(resolve, 0)
        })
      })

      // Verify
      const tree = component.toJSON()
      expect(tree.children).toContain(
        "Simulated GraphQL server response with an error"
      )
    })
  })
})
