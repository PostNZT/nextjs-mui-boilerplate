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

const HEADERS = [
  {text: 'Serial No.', props: { width: 100 }},
  {text: 'Description'},
  {text: 'Type'},
  {text: 'Status'},
  {text: 'Created By'},
  {text: 'Actions'}
]

const Items = () => {
  const data = [
    {
      serial: 'abcdef00',
      description: 'Dell Laptop - Latitude 3050',
      type: 'laptop',
      createdBy: 'stinkymonkeyph',
      status: 'released'
    },
    {
      serial: 'abcdef01',
      description: 'Dell Laptop - Latitude 3050',
      type: 'laptop',
      createdBy: 'stinkymonkeyph',
      status: 'available'
    },
  ]

  return (
    <React.Fragment>
      <Card title="Item List">
        <Table>
          <TableHead 
            headers={HEADERS}
          />
          <TableBody>
            {data.map((data) => (
                <TableRow hover key={data.serial}>
                  <TableCell>
                    {data.serial}
                  </TableCell>
                  <TableCell>
                    {data.description}
                  </TableCell>
                  <TableCell>
                    {data.type}
                  </TableCell>
                  <TableCell>
                    {data.status}
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

export default Items