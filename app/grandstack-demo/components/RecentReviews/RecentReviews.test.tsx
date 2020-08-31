import React from "react"
import { mount } from "enzyme"

import RecentReviews, { GET_RECENT_REVIEWS_QUERY } from "./RecentReviews"
import { MockedProvider } from "@apollo/client/testing"
import { act } from "@testing-library/react"

describe("GRANDstack UserCount component", () => {
  it("should render the latest reviews after receiving data", async () => {
    const expectedTotalUsers = 4

    // Define our Apollo request
    const renderRequest = {
      request: {
        query: GET_RECENT_REVIEWS_QUERY,
        variables: {},
      },
      result: {
        data: {
          Review: [
            {
              user: { name: "Angie", __typename: "User" },
              business: {
                name: "Imagine Nation Brewing",
                __typename: "Business",
              },
              date: { formatted: "2018-09-10", __typename: "_Neo4jDate" },
              text: "",
              stars: 3,
              __typename: "Review",
            },
            {
              user: { name: "Angie", __typename: "User" },
              business: { name: "Zootown Brew", __typename: "Business" },
              date: { formatted: "2018-08-11", __typename: "_Neo4jDate" },
              text: "",
              stars: 5,
              __typename: "Review",
            },
            {
              user: { name: "Bob", __typename: "User" },
              business: { name: "Market on Front", __typename: "Business" },
              date: { formatted: "2018-03-24", __typename: "_Neo4jDate" },
              text: "",
              stars: 4,
              __typename: "Review",
            },
            {
              user: { name: "Will", __typename: "User" },
              business: { name: "Ninja Mike's", __typename: "Business" },
              date: { formatted: "2018-01-03", __typename: "_Neo4jDate" },
              text:
                "Best breakfast sandwich at the Farmer's Market. Always get the works.",
              stars: 4,
              __typename: "Review",
            },
            {
              user: { name: "Jenny", __typename: "User" },
              business: { name: "Ninja Mike's", __typename: "Business" },
              date: { formatted: "2017-11-13", __typename: "_Neo4jDate" },
              text: "",
              stars: 5,
              __typename: "Review",
            },
            {
              user: { name: "Jenny", __typename: "User" },
              business: { name: "Hanabi", __typename: "Business" },
              date: { formatted: "2016-11-21", __typename: "_Neo4jDate" },
              text: "",
              stars: 5,
              __typename: "Review",
            },
            {
              user: { name: "Jenny", __typename: "User" },
              business: {
                name: "KettleHouse Brewing Co.",
                __typename: "Business",
              },
              date: { formatted: "2016-07-14", __typename: "_Neo4jDate" },
              text: "",
              stars: 5,
              __typename: "Review",
            },
            {
              user: { name: "Will", __typename: "User" },
              business: { name: "Ducky's Car Wash", __typename: "Business" },
              date: { formatted: "2016-03-04", __typename: "_Neo4jDate" },
              text: "Awesome full-service car wash. Love Ducky's!",
              stars: 5,
              __typename: "Review",
            },
            {
              user: { name: "Will", __typename: "User" },
              business: {
                name: "KettleHouse Brewing Co.",
                __typename: "Business",
              },
              date: { formatted: "2016-01-03", __typename: "_Neo4jDate" },
              text: "Great IPA selection!",
              stars: 4,
              __typename: "Review",
            },
            {
              user: { name: "Bob", __typename: "User" },
              business: {
                name: "Imagine Nation Brewing",
                __typename: "Business",
              },
              date: { formatted: "2015-12-15", __typename: "_Neo4jDate" },
              text: "",
              stars: 4,
              __typename: "Review",
            },
          ],
        },
      },
    }

    // Define our mock response(s)
    const gqlMocks = [renderRequest]

    const wrapper = mount(
      <MockedProvider mocks={gqlMocks} addTypename={true}>
        <RecentReviews />
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
    expect(wrapper.html()).toContain(expectedTotalUsers)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it("should display an error message if our request resulted in an error", async () => {
    // Define our Apollo request
    const renderRequest = {
      request: {
        query: GET_RECENT_REVIEWS_QUERY,
        variables: {},
      },
      error: new Error("Uh oh. Something bad happened."),
    }

    // Define our mock response(s)
    const gqlMocks = [renderRequest]

    const wrapper = mount(
      <MockedProvider mocks={gqlMocks} addTypename={true}>
        <RecentReviews />
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
  })
})
