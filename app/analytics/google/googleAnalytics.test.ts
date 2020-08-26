import {
  GOOGLE_ANALYTICS_TRACKING_ID,
  pageview,
  event,
} from "./googleAnalytics"

describe("Our Google Analytics library", () => {
  describe("should contain a GOOGLE_ANALYTICS_TRACKING_ID that", () => {
    it("has been defined", () => {
      expect(GOOGLE_ANALYTICS_TRACKING_ID).toBeDefined()
    })
    it("is a string", () => {
      expect(typeof GOOGLE_ANALYTICS_TRACKING_ID).toEqual("string")
    })
  })

  describe("should contain a pageview function that", () => {
    // Create a mock for the gtag script on our window object
    const originalWindow = window

    beforeEach(() => {
      window.gtag = jest.fn()
    })
    afterEach(() => {
      window.gtag = originalWindow.gtag
    })

    it("has been defined", () => {
      expect(pageview).toBeDefined()
    })
    it("sends a config event to window.gtag with parameters containing a URL", () => {
      // Create a mock for the gtag script on our window object
      const mockEvent = "config"
      const mockUrl = "/"
      const expectedArgs = [
        mockEvent,
        GOOGLE_ANALYTICS_TRACKING_ID,
        { page_path: `${mockUrl}` },
      ]

      // Call our function
      pageview(mockUrl)

      // Validate
      expect(window.gtag).toBeCalledTimes(1)
      expect(window.gtag).toBeCalledWith(
        expectedArgs[0],
        expectedArgs[1],
        expectedArgs[2]
      )
    })
  })
  describe("should contain an event function that", () => {
    // Create a mock for the gtag script on our window object
    const originalWindow = window

    beforeEach(() => {
      window.gtag = jest.fn()
    })
    afterEach(() => {
      window.gtag = originalWindow.gtag
    })

    it("has been defined", () => {
      expect(event).toBeDefined()
    })
    it("sends an action to window.gtag with event details", () => {
      // Define our mocks
      const mockEvent = "event"
      const mockEventCategory = "ecommerce"
      const mockEventLabel = "test-label"
      const mockEventValue = "test-value"
      const mockEventDetails = {
        action: "login",
        category: mockEventCategory,
        label: mockEventLabel,
        value: mockEventValue,
      }
      const expectedArgs = [
        mockEvent,
        mockEventDetails.action,
        {
          event_category: mockEventDetails.category,
          event_label: mockEventDetails.label,
          value: mockEventDetails.value,
        },
      ]

      // Call our function
      event(mockEventDetails)

      // Validate
      expect(window.gtag).toBeCalledTimes(1)
      expect(window.gtag).toBeCalledWith(
        expectedArgs[0],
        expectedArgs[1],
        expectedArgs[2]
      )
    })
  })
})
