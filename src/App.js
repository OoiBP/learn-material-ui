import React from 'react';
import { Paper, Button, Typography } from '@material-ui/core';

class App extends React.Component {
  render() {
    return (
      <Paper>
        <Typography align="center" variant="h1" gutterBottom>Learn Material UI</Typography>
        <Button variant="contained" color="primary">Here is your button</Button>
      </Paper>
    )
  }
}

export default App;
