import React from "react"
import { mount } from "enzyme"
import DefaultPage from "../pages/index"

describe("The default page", () => {
  it(`should contain placeholder text`, () => {
    const subject = mount(<DefaultPage />)
    expect(subject.html()).toContain("Welcome")
  })
})
