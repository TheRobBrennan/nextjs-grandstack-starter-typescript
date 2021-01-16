import React from "react"
import TestRenderer from "react-test-renderer"

import DefaultPage from "../pages/index"
import { MockedProvider } from "@apollo/client/testing"

describe("The default page", () => {
  it(`should render`, () => {
    // Verify success state
    const component = TestRenderer.create(
      <MockedProvider mocks={[]} addTypename={false}>
        <DefaultPage />
      </MockedProvider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
