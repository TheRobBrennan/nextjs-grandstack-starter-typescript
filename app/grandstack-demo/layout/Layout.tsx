import { FC } from "react"

// Material UI
import { useStyles } from "./Layout.styles"
import { Container } from "@material-ui/core"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

interface ILayout {
  children?: JSX.Element[] | JSX.Element | string | null
}

const Layout: FC<ILayout> = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
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
