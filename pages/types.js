import React from 'react'
import Card from '../components/Card'
import Table from '@material-ui/core/Table'
import TableHead from '../components/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import ViewButton from '../components/ViewButton'
import UpdateButton from '../components/UpdateButton'
import DeleteButton from '../components/DeleteButton'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  iconButton: {
    marginRight: 10,
  },
})

const HEADERS = [
  {text: 'Name'},
  {text: 'CreatedBy'},
  {text: 'Actions', props: { width: 200 }}
]
const Types = () => {
  const data = [
    {
      name: 'Laptop',
      createdBy: 'stinkymonkeyph',
    },
    {
      name: 'Printer',
      createdBy: 'stinkymonkeyph',
    },
    {
      name: 'Desktop',
      createdBy: 'stinkymonkeyph',
    },
  ]

  return (
    <React.Fragment>
      <Card title="Item Types">
        <Table>
          <TableHead 
            headers={HEADERS}
          />
          <TableBody>
            {data.map((data) => (
                <TableRow hover key={data.name}>
                  <TableCell>
                    {data.name}
                  </TableCell>
                  <TableCell>
                    {data.createdBy}
                  </TableCell>
                  <TableCell>
                    <ViewButton />
                    <UpdateButton />
                    <DeleteButton />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Card>
    </React.Fragment>
  )
}

export default Types