import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  iconButton: {
    marginRight: 10,
  },
})

const DeleteButton = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <IconButton
        className={classes.iconButton} 
        size="small"
      >
        <DeleteIcon />
      </IconButton>
    </React.Fragment>
  )
}

export default DeleteButton