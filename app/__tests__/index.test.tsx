import React from "react"
import { mount } from "enzyme"
import DefaultPage from "../pages/index"

describe("The default page", () => {
  it(`should render`, () => {
    const subject = mount(<DefaultPage />)
    expect(subject).toBeDefined()
  })
})
