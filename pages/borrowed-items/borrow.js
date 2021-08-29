import React from 'react'
import Card from '../../components/Card'
import Button from '@material-ui/core/Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

const Borrow = () => {
    return (
        <React.Fragment>
            <Card 
              title="Borrow Form"
              toolbar={
                  <React.Fragment>
                    <Button 
                        component="a" 
                        href="/borrowed-items" 
                        variant="contained" 
                        color="primary" 
                        size="small"
                        startIcon={<ArrowBackIosIcon />}
                    >
                        Borrowed Items
                    </Button>
                  </React.Fragment> 
              }
            />
        </React.Fragment>
    )
}

export default Borrow