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
import Footer from "../components/Footer/Footer"

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
          <Footer />
        </Container>
      </main>
    </div>
  )
}
export default Layout
