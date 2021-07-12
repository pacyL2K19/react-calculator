/* eslint-disable max-len */
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  marginTop: {
    marginTop: theme.spacing(5),
  },
  textParagraph: {
    fontSize: 18,
    marginTop: theme.spacing(4),

  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Box>
      <h1 className={classes.marginTop}>Welcome to our page!</h1>
      <p className={classes.textParagraph}>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui o!cia deserunt mollit anim id est laborum. Ipsu
        {' '}
      </p>

      <p className={classes.textParagraph}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui o!cia deserunt mollit anim id est laborum. Ipsu
      </p>
    </Box>
  );
};

export default Home;
