import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Container from '@material-ui/core/Container'
import ListIcon from '@material-ui/icons/List'
import Typography from '@material-ui/core/Typography'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'
import GroupWorkIcon from '@material-ui/icons/GroupWork'
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import Nav from '../components/Nav'
import Breadcrumbs from '../components/Breadcrumbs'

import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'
import clsx from 'clsx'

const drawerWidth = 170

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: `calc(100% - 200) !important`,
    marginLeft: drawerWidth,
  },
  innerContent: {
    marginTop: 50,
  },
  paper: {
    minHeight: 400,
  },
  icon: {
    width: 40,
  },
  listText: {
    fontWeight: 'bold !important',
  }
}))

const Main = (props) => {
  const { children } = props
  const classes = useStyles()
  const router = useRouter()
  const noAppBarRoute = '/'
  const currentRoute = router.pathname

  const menus = [
    {
      text: 'Borrowed',
      href: '/borrowed-items',
      icon: <ListIcon color="primary" />
    },
    {
      text: 'Item List',
      href: '/items',
      icon: <LocalShippingIcon color="primary" />
    },
    {
      text: 'Item Types',
      href: '/types',
      icon: <GroupWorkIcon color="primary" />
    },
    {
      text: 'Audit Logs',
      href: '/audit-logs',
      icon: <ChangeHistoryIcon color="primary" />
    }
  ]

  const isOpenRoute = () => {
    return currentRoute === noAppBarRoute
  }

  return (
    <React.Fragment>
      {!isOpenRoute() && (
        <React.Fragment>
          <Nav />
          <Drawer
            variant="permanent"
            className={classes.drawer}
          >
            <div className={classes.toolbar}>
            {/*  */}
            </div>
            <Divider />
            <List style={{ width: drawerWidth }}>
              {
                menus.map(({text, href, icon}, index) => (
                  <ListItem button component="a" href={href} key={`${text}${index}`}>
                    <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
                    <ListItemText 
                      primary={
                        <Typography 
                          variant="subtitle"
                          className={classes.listText}
                        >
                          {text}
                        </Typography>
                      } 
                    />
                  </ListItem>
                ))
              }
            </List>
          </Drawer>
        </React.Fragment>
      )}
      <main className={clsx(!isOpenRoute() && classes.content, '')}>
        <div className={classes.innerContent}>
          <Container>
            {!isOpenRoute() && (<Breadcrumbs />)}
            {children}
          </Container>
        </div>
      </main>
    </React.Fragment>
  )
}
 
export default Main