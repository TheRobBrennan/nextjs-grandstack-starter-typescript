import React from "react"
import { mount } from "enzyme"

import UserList, { GET_USER_LIST } from "./UserList"
import { MockedProvider } from "@apollo/client/testing"
import { act } from "@testing-library/react"

describe("GRANDstack UserList component", () => {
  it("should render the list of users in ascending order after receiving data", async () => {
    // Define our Apollo request
    const renderRequest = {
      request: {
        query: GET_USER_LIST,
        variables: { first: 10, offset: 0, orderBy: "name_asc", filter: {} },
      },
      result: {
        data: {
          User: [
            {
              id: "u4",
              name: "Angie",
              avgStars: 4,
              numReviews: 2,
              __typename: "User",
            },
            {
              id: "u2",
              name: "Bob",
              avgStars: 4,
              numReviews: 2,
              __typename: "User",
            },
            {
              id: "u3",
              name: "Jenny",
              avgStars: 5,
              numReviews: 3,
              __typename: "User",
            },
            {
              id: "u1",
              name: "Will",
              avgStars: 4.2,
              numReviews: 5,
              __typename: "User",
            },
          ],
        },
      },
    }

    // Define our mock response(s)
    const gqlMocks = [renderRequest]

    const wrapper = mount(
      <MockedProvider mocks={gqlMocks} addTypename={true}>
        <UserList />
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
    // expect(wrapper.html()).toMatchSnapshot()
  })
  it("should display an error message if our request resulted in an error", async () => {
    // Define our Apollo request
    const renderRequest = {
      request: {
        query: GET_USER_LIST,
        variables: { first: 10, offset: 0, orderBy: "name_asc", filter: {} },
      },
      error: new Error("Uh oh. Something bad happened."),
    }

    // Define our mock response(s)
    const gqlMocks = [renderRequest]

    const wrapper = mount(
      <MockedProvider mocks={gqlMocks} addTypename={true}>
        <UserList />
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
