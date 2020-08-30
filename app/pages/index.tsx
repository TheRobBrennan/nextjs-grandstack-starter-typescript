import { NextPage } from "next"

// Material UI
import { Typography } from "@material-ui/core"

const DefaultPage: NextPage = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Welcome to Next.js with TypeScript
    </Typography>
  )
}
export default DefaultPage
