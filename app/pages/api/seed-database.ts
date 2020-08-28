import { NextApiRequest, NextApiResponse } from "next"

export type SeedDatabaseResponse = {
  message: string
}

export const handler = (
  req: NextApiRequest,
  res: NextApiResponse<SeedDatabaseResponse>
) => {
  res.status(200).json({
    message: `Database has been initialized.`,
  })
}

export default handler
