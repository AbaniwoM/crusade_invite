import React from 'react';
import { Grid } from '@material-ui/core';

import Main from './components/Main';
import useStyles from './appStyles';

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems='center' justify='center' style={{ height: '100vh' }}>
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
      </Grid>
    </div>
   )
};

export default App;
