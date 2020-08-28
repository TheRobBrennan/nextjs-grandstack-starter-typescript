import httpMocks from "node-mocks-http"

export const generateMockNextApiRequest = () => {
  const req = httpMocks.createRequest()

  // We need to add an env property to our request for it to be a valid NextApiRequest type
  req.env = { test: "test" }

  return req
}

export const generateMockNextApiResponse = () => {
  const res = httpMocks.createResponse()

  // Mock our response status function so we can verify what HTTP status code it has been called with
  res.status = jest.fn(function () {
    return this
  })

  // Mock our JSON response function so we can see what data has been returned from our API
  res.json = jest.fn()

  return res
}
