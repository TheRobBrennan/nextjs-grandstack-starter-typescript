import React from "react"
import clsx from "clsx"

// Components
import RatingsChart from "../RatingsChart/RatingsChart"
import UserCount from "../UserCount/UserCount"
import RecentReviews from "../RecentReviews/RecentReviews"

// Material UI
import { useStyles } from "./Dashboard.styles"
import { useTheme } from "@material-ui/core/styles"
import { Grid, Paper } from "@material-ui/core"

const Dashboard = () => {
  const theme = useTheme()
  const classes = useStyles(theme)
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <>
      <Grid container spacing={4}>
        {/* Ratings Chart */}
        <Grid item xs={12} md={8} lg={7}>
          <Paper className={fixedHeightPaper}>
            <RatingsChart />
          </Paper>
        </Grid>
        {/* User Count */}
        <Grid item xs={12} md={4} lg={5}>
          <Paper className={fixedHeightPaper}>
            <UserCount />
          </Paper>
        </Grid>
        {/* Recent Reviews */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <RecentReviews />
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}
export default Dashboard
