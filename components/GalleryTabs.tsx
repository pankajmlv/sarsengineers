import { Paper, Tabs, Tab, Box, Typography, ImageList, ImageListItem } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';

function TabPanel(props: any) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index: any) {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  }

const useStyles: any = makeStyles({
  root: {
    flexGrow: 0,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
      <>
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Images" icon={<PhotoCameraIcon/>} {...a11yProps(0)}/>
        <Tab label="Videos" icon={<VideoCameraFrontIcon/>} {...a11yProps(1)}/>
      </Tabs>
    </Paper>
    <TabPanel value={value} index={0}>
    <ImageList variant="masonry" cols={3} gap={8}>
  {imgData.map((img) => (
    <ImageListItem key={img}>
      <img
        src={`${path}${img}.jpg?w=248&fit=crop&auto=format`}
        srcSet={`${path}${img}.jpg?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt="no img"
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <div className='row justify-content-center'>
      <video width="320" height="240" src={`../static/videos/${videoData[0]}.mp4`} controls></video>
      </div>
      </TabPanel>
    </>
  );
}

const imgData = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37];
const videoData = [1];
const path = '../static/images/'