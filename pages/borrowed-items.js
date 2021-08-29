import React from 'react'
import Card from '../components/Card'
import ViewButton from '../components/ViewButton'
import UpdateButton from '../components/UpdateButton'
import DeleteButton from '../components/DeleteButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableHead from '../components/TableHead'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

const HEADERS = [
  {text: 'Reference'},
  {text: 'ID Number'},
  {text: 'Fullname'},
  {text: 'Item'},
  {text: 'Serial'},
  {text: 'Created By'},
  {text: 'Action'}
]

const Borrowed = () => {
  const data = [{
    ref: '39925',
    id: 10289663,
    fullName: 'John Wick',
    item: 'Dell Latitude 3050',
    serial: '15678ys',
    createdBy: 'stinkymonkeyph'
  }, {
    ref: '39926',
    id: 10288854,
    fullName: 'Gina Trece',
    item: 'Dell Latitude 3050',
    serial: '05678xs',
    createdBy: 'stinkymonkeyph'
  }]

  return (
    <React.Fragment>
      <Card 
        title="Borrowed Items"
        toolbar={
          <React.Fragment>
            <Button 
              component="a" 
              href="/borrowed-items/borrow" 
              variant="contained" 
              color="primary" 
              size="small"
              startIcon={
                <AddIcon />
              }
            >
              Borrow Item
            </Button>
          </React.Fragment>
        }
      >
        <Table>
          <TableHead 
            headers={HEADERS}
          />
          <TableBody>
            {data.map((data) => (
              <TableRow hover key={data.ref}>
                <TableCell>
                  {data.ref}
                </TableCell>
                <TableCell>
                  {data.id}
                </TableCell>
                <TableCell>
                  {data.fullName}
                </TableCell>
                <TableCell>
                  {data.item}
                </TableCell>
                <TableCell>
                  {data.serial}
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
 
export default Borrowed