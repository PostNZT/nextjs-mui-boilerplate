import Router from 'next/router'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    width: 500,
    margin: '0 auto',
    minHeight: 250,
    marginTop: 15,
  },
  inner: {
    width: '98%',
    margin: '0 auto',
    height: '0 auto'
  },
  logo: {
    marginTop: 150,
  },
  button: {
    marginLeft: 8,
    marginTop: 10,
  }
})

const Home = () => {
  const classes = useStyles()

  const login = () => {
    Router.push('/borrowed-items')
  }

  return (
    <Container maxWidth="sm">
      <center>
        <img src="logo.png" height="80" className={classes.logo} />
        <Typography variant="h6" color="primary">
            MRE Generator
        </Typography>
      </center>
      <Paper elevation={0} className={classes.container}>
          <TextField
            label="Username"
            style={{ margin: 8 }}
            placeholder="ninjaname"
            InputLabelProps={{ shrink: true }}
            fullWidth
            required
          /> <br />
          <TextField
            label="Password"
            type="password"
            style={{ margin: 8 }}
            placeholder="ninjapass"
            InputLabelProps={{ shrink: true }}
            fullWidth
            required
          />
          <center>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classes.button}
              onClick={login}
            >
              Login
            </Button>
          </center>
      </Paper>
    </Container>
  )
}

export default Home
