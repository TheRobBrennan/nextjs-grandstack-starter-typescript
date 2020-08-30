import { FC } from "react"

// Material UI
import { Typography } from "@material-ui/core"

interface ITitle {
  children?: string
}

const Title: FC<ITitle> = ({ children }) => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {children}
    </Typography>
  )
}
export default Title
