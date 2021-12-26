import { Paper, Tabs, Tab } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles: any = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Images" />
        <Tab label="Video" />
      </Tabs>
    </Paper>
  );
}
