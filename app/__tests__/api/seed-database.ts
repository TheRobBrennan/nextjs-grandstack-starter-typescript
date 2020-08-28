import { handler } from "../../pages/api/seed-database"
import {
  generateMockNextApiRequest,
  generateMockNextApiResponse,
} from "../../__mocks__/NextApi"

describe("/api/seed-database", () => {
  describe("when completed successfully should return", () => {
    let req, res

    beforeEach(() => {
      req = generateMockNextApiRequest()
      res = generateMockNextApiResponse()
      res.status = jest.fn(function () {
        return this
      })
      res.json = jest.fn()
    })

    // We need to reset mocks after every test so that we can reuse them
    afterEach(() => {
      jest.resetAllMocks()
    })

    it("an HTTP status code of 200", async () => {
      const result = await handler(req, res)

      expect(res.status).toHaveBeenCalledWith(200)
    })
    it("an expected JSON response", async () => {
      const result = await handler(req, res)
      const expectedJsonResponse = { message: "Database has been initialized." }

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining(expectedJsonResponse)
      )
    })
  })
})
