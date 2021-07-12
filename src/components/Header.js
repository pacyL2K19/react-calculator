import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Box, Divider, List, ListItem, SwipeableDrawer,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
  const classes = useStyles();
  const [drawer, setDrawer] = useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawer({ ...drawer, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key="home">
          <Link to="/">HOME</Link>
        </ListItem>
        <Divider />
        <ListItem button key="calculator">
          <Link to="/calculator">CALCULATOR</Link>
        </ListItem>
        <Divider />

        <ListItem button key="quote">
          <Link to="/quote">QUOTE</Link>
        </ListItem>
      </List>

    </div>
  );

  return (
    <div width={1} className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleDrawer('right', true)} edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Math Magicians
          </Typography>
          <Box
            justifyContent="flex-end"
            display={{
              xs: 'none', sm: 'block', md: 'block', lg: 'block', xl: 'block',
            }}
          >
            <Link to="/">HOME</Link>
            <Link color="inherit" to="/calculator">CALCULATOR</Link>
            <Link color="inherit" to="/quote">QUOTE</Link>
          </Box>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="right"
        open={drawer.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {list('right')}

      </SwipeableDrawer>
    </div>
  );
};

export default Header;
