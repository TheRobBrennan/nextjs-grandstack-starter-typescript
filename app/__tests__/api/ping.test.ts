import { handler, PingResponse as HandlerResponse } from "../../pages/api/ping"
import {
  generateMockNextApiRequest,
  generateMockNextApiResponse,
} from "../../__mocks__/NextApi"

describe("/api/ping", () => {
  describe("when invoked should return", () => {
    let req, res

    beforeEach(() => {
      req = generateMockNextApiRequest()
      res = generateMockNextApiResponse()
    })

    // We need to reset mocks after every test so that we can reuse them
    afterEach(() => {
      jest.resetAllMocks()
    })

    it("an HTTP status code of 200", async () => {
      const result = await handler(req, res)

      expect(res.status).toHaveBeenCalledWith(200)
    })
    it("an expected JSON response from our handler", async () => {
      const result = await handler(req, res)
      const expectedResponse: HandlerResponse = {
        message: expect.any(String),
      }
      const expectedResponseShape = expect.objectContaining(expectedResponse)

      expect(res.json).toHaveBeenCalledWith(expectedResponseShape)
    })
  })
})
