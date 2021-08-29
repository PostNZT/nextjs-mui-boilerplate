import React from 'react'
import Card from '../components/Card'
import Table from '@material-ui/core/Table'
import TableHead from '../components/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  iconButton: {
    marginRight: 10,
  },
})

const HEADERS = [
  {text: 'Action'},
  {text: 'Entity'},
  {text: 'Payload', props: { width: 400 }},
  {text: 'Status'},
  {text: 'CreatedBy'}
]
const AuditLogs = () => {
  const data = [
    {
      action: 'Added',
      entity: 'item',
      payload: '{serial: 2xsym, description: Dell Laptop 3050}',
      status: 'success',
      createdBy: 'stinkymonkeyph',
    },
    {
      action: 'Added',
      entity: 'Borrowed',
      payload: '{serial: 2xsym, description: Dell Laptop 3050, beneficiaryId: 1987, beneficiaryType: student}',
      status: 'success',
      createdBy: 'stinkymonkeyph',
    },
  ]

  return (
    <React.Fragment>
      <Card title="Audit Logs">
        <Table>
          <TableHead 
            headers={HEADERS}
          />
          <TableBody>
            {data.map((data) => (
                <TableRow hover key={data.name}>
                  <TableCell>
                    {data.action}
                  </TableCell>
                  <TableCell>
                    {data.entity}
                  </TableCell>
                  <TableCell>
                    <code style={{ color: '#6e1826', fontWeight: 600, backgroundColor: 'whitesmoke' }}>{data.payload}</code>
                  </TableCell>
                  <TableCell>
                    {data.status}
                  </TableCell>
                  <TableCell>
                    {data.createdBy}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Card>
    </React.Fragment>
  )
}

export default AuditLogs