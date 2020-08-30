// Material UI
import { makeStyles } from "@material-ui/core/styles"

// Styling
export const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24,
  },
  appBar: {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  title: {
    flexGrow: 1,
  },
  appBarImage: {
    maxHeight: "75px",
    paddingRight: "20px",
  },
}))
