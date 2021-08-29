import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    marginLeft: 15,
    paddingTop: 8,
  },
  appBar: {
    height: 50,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}))

const Nav = () => {
  const classes = useStyles()
  const router = useRouter()
  const noAppBarRoute = '/'
  const currentRoute = router.pathname

  return (
    <React.Fragment>
      {
        currentRoute !== noAppBarRoute && (
        <AppBar 
          position="fixed"
          className={classes.appBar}
        >
          <Typography variant="h6" className={classes.title}>
            MRE Generator
          </Typography>
        </AppBar>
        )
      }
    </React.Fragment>
  )
}
 
export default Nav