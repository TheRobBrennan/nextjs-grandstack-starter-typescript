import httpMocks from "node-mocks-http"

export const generateMockNextApiRequest = function () {
  const req = httpMocks.createRequest()
  req.env = { test: "test" }

  return req
}

export const generateMockNextApiResponse = function () {
  return httpMocks.createResponse()
}
