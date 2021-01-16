import React from "react"
import TestRenderer, { act } from "react-test-renderer"
import { MockedProvider } from "@apollo/client/testing"

import UserCount, { GET_USER_COUNT_QUERY } from "./UserCount"

describe("GRANDstack UserCount component", () => {
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

    // Generate our result string
    const p = component.root.findAllByType("p")
    const result = p
      .map((obj) => {
        return obj.children
      })
      .join(" ")
    console.log(result)

    // Verify
    expect(result).toContain("4 users found")
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
