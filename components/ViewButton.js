import React from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  iconButton: {
    marginRight: 10,
  },
})

const ViewButton = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <IconButton
        className={classes.iconButton} 
        size="small"
      >
        <VisibilityIcon />
      </IconButton>
    </React.Fragment>
  )
}

export default ViewButton