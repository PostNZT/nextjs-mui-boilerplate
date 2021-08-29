import React from 'react'
import MUITableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const TableHead = (props) => {
  const { headers = [] } = props
  return (
    <React.Fragment>
      <MUITableHead>
          <TableRow>
            {headers.map((item) => (
              <TableCell {...item.props}>{item.text}</TableCell>
            ))}
          </TableRow>
      </MUITableHead>
    </React.Fragment>
  )
}
 
export default TableHead