import React from "react"
import TestRenderer, { act } from "react-test-renderer"
import { MockedProvider } from "@apollo/client/testing"

import RecentReviews, { GET_RECENT_REVIEWS_QUERY } from "./RecentReviews"

describe("GRANDstack RecentReviews component", () => {
  it("should render the latest reviews after receiving data", async () => {
    // Define our Apollo request
    const renderRequest = {
      request: {
        query: GET_RECENT_REVIEWS_QUERY,
        variables: {},
      },
      result: {
        data: {
          Reviews: [
            {
              date: {
                year: {
                  low: 2018,
                  high: 0,
                },
                month: {
                  low: 9,
                  high: 0,
                },
                day: {
                  low: 10,
                  high: 0,
                },
              },
              user: {
                userId: "u4",
                name: "Angie",
                __typename: "User",
              },
              business: {
                name: "Imagine Nation Brewing",
                __typename: "Business",
              },
              text: "",
              stars: {
                low: 3,
                high: 0,
              },
              __typename: "Review",
            },
            {
              date: {
                year: {
                  low: 2018,
                  high: 0,
                },
                month: {
                  low: 8,
                  high: 0,
                },
                day: {
                  low: 11,
                  high: 0,
                },
              },
              user: {
                userId: "u4",
                name: "Angie",
                __typename: "User",
              },
              business: {
                name: "Zootown Brew",
                __typename: "Business",
              },
              text: "",
              stars: {
                low: 5,
                high: 0,
              },
              __typename: "Review",
            },
            {
              date: {
                year: {
                  low: 2018,
                  high: 0,
                },
                month: {
                  low: 3,
                  high: 0,
                },
                day: {
                  low: 24,
                  high: 0,
                },
              },
              user: {
                userId: "u2",
                name: "Bob",
                __typename: "User",
              },
              business: {
                name: "Market on Front",
                __typename: "Business",
              },
              text: "",
              stars: {
                low: 4,
                high: 0,
              },
              __typename: "Review",
            },
            {
              date: {
                year: {
                  low: 2018,
                  high: 0,
                },
                month: {
                  low: 1,
                  high: 0,
                },
                day: {
                  low: 3,
                  high: 0,
                },
              },
              user: {
                userId: "u1",
                name: "Will",
                __typename: "User",
              },
              business: {
                name: "Ninja Mike's",
                __typename: "Business",
              },
              text:
                "Best breakfast sandwich at the Farmer's Market. Always get the works.",
              stars: {
                low: 4,
                high: 0,
              },
              __typename: "Review",
            },
            {
              date: {
                year: {
                  low: 2017,
                  high: 0,
                },
                month: {
                  low: 11,
                  high: 0,
                },
                day: {
                  low: 13,
                  high: 0,
                },
              },
              user: {
                userId: "u3",
                name: "Jenny",
                __typename: "User",
              },
              business: {
                name: "Ninja Mike's",
                __typename: "Business",
              },
              text: "",
              stars: {
                low: 5,
                high: 0,
              },
              __typename: "Review",
            },
            {
              date: {
                year: {
                  low: 2016,
                  high: 0,
                },
                month: {
                  low: 11,
                  high: 0,
                },
                day: {
                  low: 21,
                  high: 0,
                },
              },
              user: {
                userId: "u3",
                name: "Jenny",
                __typename: "User",
              },
              business: {
                name: "Hanabi",
                __typename: "Business",
              },
              text: "",
              stars: {
                low: 5,
                high: 0,
              },
              __typename: "Review",
            },
            {
              date: {
                year: {
                  low: 2016,
                  high: 0,
                },
                month: {
                  low: 7,
                  high: 0,
                },
                day: {
                  low: 14,
                  high: 0,
                },
              },
              user: {
                userId: "u3",
                name: "Jenny",
                __typename: "User",
              },
              business: {
                name: "KettleHouse Brewing Co.",
                __typename: "Business",
              },
              text: "",
              stars: {
                low: 5,
                high: 0,
              },
              __typename: "Review",
            },
            {
              date: {
                year: {
                  low: 2016,
                  high: 0,
                },
                month: {
                  low: 3,
                  high: 0,
                },
                day: {
                  low: 4,
                  high: 0,
                },
              },
              user: {
                userId: "u1",
                name: "Will",
                __typename: "User",
              },
              business: {
                name: "Ducky's Car Wash",
                __typename: "Business",
              },
              text: "Awesome full-service car wash. Love Ducky's!",
              stars: {
                low: 5,
                high: 0,
              },
              __typename: "Review",
            },
            {
              date: {
                year: {
                  low: 2016,
                  high: 0,
                },
                month: {
                  low: 1,
                  high: 0,
                },
                day: {
                  low: 3,
                  high: 0,
                },
              },
              user: {
                userId: "u1",
                name: "Will",
                __typename: "User",
              },
              business: {
                name: "KettleHouse Brewing Co.",
                __typename: "Business",
              },
              text: "Great IPA selection!",
              stars: {
                low: 4,
                high: 0,
              },
              __typename: "Review",
            },
            {
              date: {
                year: {
                  low: 2015,
                  high: 0,
                },
                month: {
                  low: 12,
                  high: 0,
                },
                day: {
                  low: 15,
                  high: 0,
                },
              },
              user: {
                userId: "u2",
                name: "Bob",
                __typename: "User",
              },
              business: {
                name: "Imagine Nation Brewing",
                __typename: "Business",
              },
              text: "",
              stars: {
                low: 4,
                high: 0,
              },
              __typename: "Review",
            },
            {
              date: {
                year: {
                  low: 2015,
                  high: 0,
                },
                month: {
                  low: 9,
                  high: 0,
                },
                day: {
                  low: 1,
                  high: 0,
                },
              },
              user: {
                userId: "u1",
                name: "Will",
                __typename: "User",
              },
              business: {
                name: "Neo4j",
                __typename: "Business",
              },
              text: "The world's leading graph database HQ!",
              stars: {
                low: 5,
                high: 0,
              },
              __typename: "Review",
            },
            {
              date: {
                year: {
                  low: 2015,
                  high: 0,
                },
                month: {
                  low: 8,
                  high: 0,
                },
                day: {
                  low: 29,
                  high: 0,
                },
              },
              user: {
                userId: "u1",
                name: "Will",
                __typename: "User",
              },
              business: {
                name: "Missoula Public Library",
                __typename: "Business",
              },
              text:
                "Not a great selection of books, but fortunately the inter-library loan system is good. Wifi is quite slow. Not many comfortable places to site and read. Looking forward to the new building across the street in 2020!",
              stars: {
                low: 3,
                high: 0,
              },
              __typename: "Review",
            },
          ],
        },
      },
    }

    // Define our mock response(s)
    const gqlMocks = [renderRequest]

    // Verify success state
    const component = TestRenderer.create(
      <MockedProvider mocks={gqlMocks} addTypename={false}>
        <RecentReviews />
      </MockedProvider>
    )

    // Advance to the next tick in the event loop so our chart can render
    await act(() => {
      return new Promise((resolve) => {
        setTimeout(resolve, 0)
      })
    })

    // Verify
    const p = component.root.findByType("h2")
    expect(p.children).toContain("Recent Reviews")
  })

  describe("should display an error message if", () => {
    it("there is a network request failure", async () => {
      // Define our Apollo request
      const renderRequest = {
        request: {
          query: GET_RECENT_REVIEWS_QUERY,
          variables: {},
        },
        error: new Error("Simulated network or HTTP error"),
      }

      // Define our mock response(s)
      const gqlMocks = [renderRequest]

      // Verify success state
      const component = TestRenderer.create(
        <MockedProvider mocks={gqlMocks} addTypename={false}>
          <RecentReviews />
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
          query: GET_RECENT_REVIEWS_QUERY,
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
          <RecentReviews />
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
