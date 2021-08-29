import React from 'react'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  paper: {
    minHeight: 400,
  },
  titleWrapper: {
    height: 50,
    display: 'flex'
  },
  title: {
    marginLeft: 10,
    paddingTop: 10,
    flexGrow: 1,
  },
  innerCard: {
    margin: '0 auto'
  },
  toolbar: {    
    marginTop: 10,
    marginRight: 5,
  }
})

const Card = (props) => {
  const classes = useStyles()
  const { title = null, children, elevation = 3, toolbar = null} = props

  return (
    <React.Fragment>
      <Paper 
        elevation={elevation}
        className={classes.paper}
      >
        {title && (
            <React.Fragment>
              <div className={classes.titleWrapper}>
                <Typography 
                  variant="h6"
                  color="primary" 
                  style={{ display: 'inline-block' }}
                  className={classes.title}
                >
                  {title}
                </Typography>
                {toolbar && (
                  <div className={classes.toolbar}>
                    {toolbar}
                  </div>
                )}
              </div>
              <Divider />
            </React.Fragment>
          )
        }
        <div className={classes.innerCard}>
          {children}
        </div>
      </Paper>
    </React.Fragment>
  )
}

export default Card