import React from "react"
import { mount } from "enzyme"

import UsersPage from "../pages/users"
import { MockedProvider } from "@apollo/client/testing"

describe("The users page", () => {
  it(`should render`, () => {
    const subject = mount(
      <MockedProvider>
        <UsersPage />
      </MockedProvider>
    )
    expect(subject).toBeDefined()
  })
})
