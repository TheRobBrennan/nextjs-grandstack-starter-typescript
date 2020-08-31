// Material UI
import { makeStyles } from "@material-ui/core/styles"

export const useStyles = (theme) =>
  makeStyles({
    root: {
      maxWidth: 700,
      marginTop: theme.spacing(3),
      overflowX: "auto",
      margin: "auto",
    },
    table: {
      minWidth: 700,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      minWidth: 300,
    },
  })
