import { FC } from "react"

// Material UI
import { Box, Link as MUILink, Typography } from "@material-ui/core"

const Footer: FC = () => {
  return (
    <Box pt={4}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        {new Date().getFullYear()}{" "}
        <MUILink color="inherit" href="/">
          Robert J Brennan
        </MUILink>
        {". All rights reserved."}
      </Typography>
    </Box>
  )
}
export default Footer
