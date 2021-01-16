import React from "react"
import { mount } from "enzyme"

import DefaultPage from "../pages/index"
import { MockedProvider } from "@apollo/client/testing"

describe("The default page", () => {
  it(`should render`, () => {
    const subject = mount(
      <MockedProvider>
        <DefaultPage />
      </MockedProvider>
    )
    expect(subject).toBeDefined()
  })
})
