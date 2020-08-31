import React from "react"
import { mount } from "enzyme"

import UserCount, { GET_USER_COUNT_QUERY } from "./UserCount"
import { MockedProvider } from "@apollo/client/testing"
import { act } from "@testing-library/react"

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

    const wrapper = mount(
      <MockedProvider mocks={gqlMocks} addTypename={true}>
        <UserCount />
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
        query: GET_USER_COUNT_QUERY,
        variables: {},
      },
      error: new Error("Uh oh. Something bad happened."),
    }

    // Define our mock response(s)
    const gqlMocks = [renderRequest]

    const wrapper = mount(
      <MockedProvider mocks={gqlMocks} addTypename={true}>
        <UserCount />
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
    expect(wrapper.html()).not.toContain("Total Users")
  })
})
