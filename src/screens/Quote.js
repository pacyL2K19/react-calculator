/* eslint-disable max-len */
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  textParagraph: {
    fontSize: 20,
    marginTop: theme.spacing(6),
  },
}));

const Quote = () => {
  const classes = useStyles();

  return (
    <Box width={1 / 2} m="auto">
      <p align="center" className={classes.textParagraph}>
        Mathematics is not about numbers, equations, computations,
        or algorithms: it is about understanding. –William Paul Thurston
      </p>
    </Box>
  );
};

export default Quote;
