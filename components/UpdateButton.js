import React from 'react'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  iconButton: {
    marginRight: 10,
  },
})

const UpdateButton = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <IconButton
        className={classes.iconButton} 
        size="small"
      >
        <EditIcon />
      </IconButton>
    </React.Fragment>
  )
}

export default UpdateButton