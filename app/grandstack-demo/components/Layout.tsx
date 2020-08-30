import { FC } from "react"
import Head from "next/head"
import clsx from "clsx"

// Material UI
import { useStyles } from "./Layout.styles"
import {
  AppBar,
  Box,
  CssBaseline,
  Container,
  Link as MUILink,
  Toolbar,
  Typography,
} from "@material-ui/core"

interface ILayout {
  children?: JSX.Element[] | JSX.Element | string | null
}

const Layout: FC<ILayout> = ({ children }) => {
  const classes = useStyles()
  const APP_TITLE = "Next.js GRANDstack Starter with TypeScript"

  return (
    <div className={classes.root}>
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
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {children}
          {/* TODO: Refactor to a footer component */}
          <Box pt={4}>
            <Typography variant="body2" color="textSecondary" align="center">
              {"Copyright © "}
              {new Date().getFullYear()}{" "}
              <MUILink color="inherit" href="/">
                {APP_TITLE}
              </MUILink>
              {"."}
            </Typography>
          </Box>
        </Container>
      </main>
    </div>
  )
}
export default Layout
