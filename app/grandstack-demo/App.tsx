import { FC, useState } from "react"
import Link from "next/link"
import clsx from "clsx"

// Material UI
import { useStyles } from "./App.utilities"
import {
  AppBar,
  Box,
  CssBaseline,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link as MUILink,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core"
import {
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
} from "@material-ui/icons"

const App: FC = () => {
  const classes = useStyles()

  // Drawer
  const [open, setOpen] = useState(true)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
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
            GRANDstack Starter
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link href="/" passHref>
            <ListItem button>
              <ListItemIcon>
                <Tooltip title="Dashboard" aria-label="Dashboard">
                  <DashboardIcon />
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>

          <Link href="/" passHref>
            <ListItem button>
              <ListItemIcon>
                <Tooltip title="Users" aria-label="Users">
                  <PeopleIcon />
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
          </Link>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Box pt={4}>
            <Typography variant="body2" color="textSecondary" align="center">
              {"Copyright © "}
              <MUILink color="inherit" href="">
                GRANDstack Starter
              </MUILink>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Container>
      </main>
    </div>
  )
}
export default App
