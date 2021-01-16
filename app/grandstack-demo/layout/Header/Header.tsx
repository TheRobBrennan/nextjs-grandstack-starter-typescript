import { FC } from "react"
import Head from "next/head"
import Link from "next/link"
import clsx from "clsx"

import { dependencies } from "../../../package.json"

// Material UI
import { useStyles } from "./Header.styles"
import { AppBar, CssBaseline, Toolbar, Typography } from "@material-ui/core"

const Header: FC = () => {
  const classes = useStyles()

  const APP_TITLE = `Next.js GRANDstack Starter with @neo4j/graphql ${dependencies["@neo4j/graphql"]} and TypeScript`
  const APP_DESCRIPTION = `A sample ${APP_TITLE}`
  const APP_URL = "https://nextjs-grandstack-starter-typescript.vercel.app"
  const APP_TYPE = "website"
  const APP_LOGO = "img/grandstack.png"
  const APP_LOGO_URL = `${APP_URL}/${APP_LOGO}`
  const APP_TWITTER_ACCOUNT = "therobbrennan"
  const KEYWORDS = "nextjs, react, grandstack, neo4j, typescript, apollo"

  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>
        <meta
          property="description"
          content={APP_DESCRIPTION}
          key="description"
        />
        <meta property="keywords" content={KEYWORDS} key="keywords" />
        <meta property="og:title" content={APP_TITLE} key="og:title" />

        {/* Open Graph */}
        <meta
          property="og:description"
          content={APP_DESCRIPTION}
          key="og:description"
        />
        <meta property="og:url" content={APP_URL} key="og:url" />
        <meta property="og:type" content={APP_TYPE} key="og:type" />
        <meta property="og:image" content={APP_LOGO_URL} key="og:image" />

        {/* Twitter */}
        <meta
          property="twitter:creator"
          content={APP_TWITTER_ACCOUNT}
          key="twitter:creator"
        />
        <meta
          property="twitter:title"
          content={APP_TITLE}
          key="twitter:title"
        />
        <meta
          property="twitter:description"
          content={APP_DESCRIPTION}
          key="twitter:description"
        />
        <meta
          property="twitter:image"
          content={APP_LOGO_URL}
          key="twitter:image"
        />
      </Head>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar)}>
        <Toolbar className={classes.toolbar}>
          <Link href="/" passHref>
            <img
              className={classes.appBarImage}
              src={APP_LOGO}
              alt="GRANDstack logo"
            />
          </Link>
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
