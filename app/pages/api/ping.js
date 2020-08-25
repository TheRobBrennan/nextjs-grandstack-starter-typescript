export default async (req, res) => {
  res.status(200).json({
    message: `Back-end API is online as of ${Date.now()}`,
  })
}
