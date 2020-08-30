import { FC } from "react"
import Head from "next/head"
import clsx from "clsx"

// Material UI
import { useStyles } from "./Header.styles"
import { AppBar, CssBaseline, Toolbar, Typography } from "@material-ui/core"

const Header: FC = () => {
  const classes = useStyles()
  const APP_TITLE = "Next.js GRANDstack Starter with TypeScript"

  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>
      </Head>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar)}>
        <Toolbar className={classes.toolbar}>
          <img
            className={classes.appBarImage}
            src="img/grandstack.png"
            alt="GRANDstack logo"
          />
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {APP_TITLE}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}
export default Header
