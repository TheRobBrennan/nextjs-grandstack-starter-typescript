import React from "react"
import TestRenderer from "react-test-renderer"
import { MockedProvider } from "@apollo/client/testing"

import Title from "./Title"

describe("GRANDstack Title component", () => {
  describe("should render", () => {
    it("without any children", () => {
      const component = TestRenderer.create(
        <MockedProvider mocks={[]} addTypename={false}>
          <Title />
        </MockedProvider>
      )
      expect(component.toJSON()).toMatchSnapshot()
    })
    it("with a supplied title", () => {
      const title = "A GRANDstack Title"
      const component = TestRenderer.create(
        <MockedProvider mocks={[]} addTypename={false}>
          <Title>{title}</Title>
        </MockedProvider>
      )
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
