import { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import ErrorIcon from '@mui/icons-material/Error';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import theme from '../ui/theme';
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: '100%',
      padding: '2.5rem 25rem',
      backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.down('xxl')]: {
        padding: '2.5rem 15rem',
      },
      [theme.breakpoints.down('xl')]: {
        padding: '2.5rem 10.3rem',
      },
      [theme.breakpoints.down('lg')]: {
        padding: '2.5rem 5rem',
      },
      [theme.breakpoints.down('md')]: {
        padding: '2.5rem 2rem',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '1rem',
      },
    },
    title: {
      padding: '1rem 0 2rem 0',
      color: theme.palette.common.white,
      textAlign: 'center',
    },
    mainWrapper: {
      width: '100%',
      maxWidth: '600px',
      padding: '3rem 0',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    subtitle: {
      color: theme.palette.common.white,
      letterSpacing: '0.2rem',
      paddingBottom: '1rem',
    },
    formWrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
    textInput: {
      backgroundColor: theme.palette.common.white,
      width: '25rem',
      [theme.breakpoints.down('md')]: {
        width: '100%',
        maxWidth: '25rem',
      },
    },
    button: {
      textTransform: 'none',
      fontSize: '0.9rem',
      width: '9rem',
      height: '3.5rem',
      fontWeight: 700,
      letterSpacing: '0.02rem',
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
      transition: 'background-color 1s',
      marginBottom: '40px',
      marginLeft: '1rem',
      [theme.breakpoints.down('lg')]: {
        letterSpacing: 0,
        fontSize: '0.75rem',
      },
      [theme.breakpoints.down('md')]: {
        marginBottom: 0,
        marginLeft: 0,
        letterSpacing: '0.02rem',
        fontSize: '0.9rem',
        width: '25rem',
        maxWidth: '100%',
      },
      '&.MuiButton-root': {
        '&:hover': {
          backgroundColor: theme.palette.common.white,
          border: `1px solid ${theme.palette.secondary.main}`,
          color: theme.palette.secondary.main,
          transition: 'background-color 1s',
        },
      },
    },
  };
});

function CallToActionBlock() {
  const { classes } = useStyles();
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const matchesMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      setError(true);
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setError(true);
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.mainWrapper}>
        <Typography variant='h6' className={classes.subtitle}>
          35.000+ ALREADY JOINED
        </Typography>
        <Typography variant='h3' className={classes.title}>
          Stay up-to-date with what
          <br />
          we&#39;re doing
        </Typography>
        <Box className={classes.formWrapper}>
          <Box
            sx={{
              width: matchesMD ? '100%' : '25rem',
              maxWidth: '25rem',
              height: '5rem',
              margin: '0 0 1rem 0',
              backgroundColor: error
                ? theme.palette.common.soft_red
                : 'transparent',
              borderRadius: '5px',
            }}
          >
            <OutlinedInput
              type='email'
              endAdornment={
                error && (
                  <InputAdornment position='end'>
                    <ErrorIcon color='secondary' />
                  </InputAdornment>
                )
              }
              className={classes.textInput}
              placeholder='Enter your email address'
              onChange={handleChange}
              onClick={() => setError(false)}
            />
            {error && (
              <FormHelperText
                sx={{
                  color: theme.palette.common.white,
                  backgroundColor: theme.palette.common.soft_red,
                  paddingLeft: '1rem',
                }}
              >
                Whoops, make sure it&#39;s an email
              </FormHelperText>
            )}
          </Box>
          <Button
            variant='outlined'
            className={classes.button}
            type='submit'
            disableRipple
            onClick={handleSubmit}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CallToActionBlock;
