import React from "react"
import { mount } from "enzyme"

import Title from "./Title"

describe("GRANDstack Title component", () => {
  describe("should render", () => {
    it("without any children", () => {
      const subject = mount(<Title />)
      expect(subject).toBeDefined()
    })
    it("with a supplied title", () => {
      const title = "A GRANDstack Title"
      const subject = mount(<Title>{title}</Title>)
      expect(subject).toBeDefined()
    })
  })
})
