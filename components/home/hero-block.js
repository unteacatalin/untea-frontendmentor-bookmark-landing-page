import { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import cls from 'classnames';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: '100%',
      padding: '1rem 0 2rem 25rem',
      [theme.breakpoints.down('xxl')]: {
        padding: '1rem 0 2rem 15rem',
      },
      [theme.breakpoints.down('xl')]: {
        padding: '1rem 0 2rem 10.3rem',
      },
      [theme.breakpoints.down('lg')]: {
        padding: '1rem 0 2rem 5rem',
      },
      [theme.breakpoints.down('md')]: {
        padding: '1rem 0 2rem 2rem',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '1rem 0 2rem 1rem',
      },
    },
    title: {
      padding: '7rem 0 0.5rem 0',
      fontWeight: 700,
      textAlign: 'left',
      [theme.breakpoints.down('xxl')]: {
        padding: '3rem 0 0.5rem 0',
      },
      [theme.breakpoints.down('xl')]: {
        padding: '2rem 0 0.5rem 0',
      },
      [theme.breakpoints.down('lg')]: {
        padding: '1rem 0 0.5rem 0',
      },
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
      },
    },
    description: {
      color: theme.palette.common.grayish_blue,
      padding: '0.5rem 0 0 0',
      lineHeight: '1.9rem',
    },
    chromeButton: {
      textTransform: 'none',
      fontSize: '0.9rem',
      width: '10.3rem',
      height: '3rem',
      fontWeight: 700,
      letterSpacing: '0.02rem',
      backgroundColor: theme.palette.primary.main,
      transition: 'background-color 1s',
      [theme.breakpoints.down('lg')]: {
        width: '8.5rem',
        letterSpacing: 0,
        fontSize: '0.75rem',
      },
      [theme.breakpoints.down('md')]: {
        width: '10.3rem',
        letterSpacing: '0.02rem',
        fontSize: '0.9rem',
      },
      '&.MuiButton-root': {
        '&:hover': {
          backgroundColor: 'transparent',
          border: `1px solid ${theme.palette.primary.main}`,
          color: theme.palette.primary.main,
          transition: 'background-color 1s',
        },
      },
    },
    firefoxButton: {
      textTransform: 'none',
      fontSize: '0.9rem',
      fontWeight: 700,
      boxShadow: `2px 2px 5px 1px ${theme.palette.common.grayish_blue}`,
      width: '10.3rem',
      height: '3rem',
      color: theme.palette.common.black,
      marginLeft: '1rem',
      border: 'none',
      transition: 'border 1s',
      [theme.breakpoints.down('lg')]: {
        width: '8.5rem',
        letterSpacing: 0,
        fontSize: '0.75rem',
        marginLeft: '0.5rem',
      },
      [theme.breakpoints.down('md')]: {
        width: '10.3rem',
        letterSpacing: '0.02rem',
        fontSize: '0.9rem',
        marginLeft: '0.9rem',
      },
      '&.MuiButton-root': {
        '&:hover': {
          backgroundColor: 'transparent',
          border: `1px solid ${theme.palette.common.very_dark_blue}`,
          color: theme.palette.common.very_dark_blue,
          transition: 'border 1s',
        },
      },
    },
    selectedMarkerSelected: {
      '&.MuiBox-root': {
        border: `5px solid ${theme.palette.common.black}`,
        borderRadius: '17px',
      },
    },
    selectedMarker: {
      '&.MuiBox-root': {
        border: 'none',
      },
    },
  };
});

function HeroBlock() {
  const { classes } = useStyles();
  const theme = useTheme();
  const [selected, setSelected] = useState(false);

  const matchesXS = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const matchesLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const matchesXL = useMediaQuery((theme) => theme.breakpoints.down('xl'));
  const matchesXXL = useMediaQuery((theme) => theme.breakpoints.down('xxl'));

  const switchBlock = (
    <Grid item container md={7} sm={12}>
      <Box
        sx={{
          width: '100%',
          height: matchesXS
            ? '260px'
            : matchesSM
            ? '320px'
            : matchesMD
            ? '400px'
            : matchesLG
            ? '340px'
            : matchesXL
            ? '420px'
            : matchesXXL
            ? '540px'
            : '620px',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '70%',
            height: '70%',
            position: 'absolute',
            right: 0,
            bottom: 0,
            backgroundColor: 'primary.main',
            borderRadius: '35% 0 0 35%',
          }}
        />
        <Box
          sx={{
            width: matchesXS
              ? '270px'
              : matchesSM
              ? '400px'
              : matchesMD
              ? '500px'
              : matchesLG
              ? '420px'
              : matchesXL
              ? '550px'
              : matchesXXL
              ? '700px'
              : '832px',
            height: matchesXS
              ? '176px'
              : matchesSM
              ? '260px'
              : matchesMD
              ? '325px'
              : matchesLG
              ? '273px'
              : matchesXL
              ? '358px'
              : matchesXXL
              ? '455px'
              : '541px',
            position: 'absolute',
            left: 0,
            top: 0,
            backgroundImage: 'url(./illustration-features-tab-1.svg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '15px',
            padding: 0,
            margin: 0,
          }}
          className={cls(
            classes.selectedMarker,
            selected && classes.selectedMarkerSelected
          )}
        />
      </Box>
    </Grid>
  );

  return (
    <Box className={classes.container}>
      <Grid item container xs={12} spacing={matchesMD ? 0 : 10}>
        {matchesMD && switchBlock}
        <Grid item container md={5} sm={12}>
          <Box
            sx={{
              paddingRight: 0,
              [theme.breakpoints.down('md')]: {
                paddingRight: '2rem',
              },
              [theme.breakpoints.down('sm')]: {
                paddingRight: '1rem',
              },
            }}
          >
            <Typography
              variant={matchesMD ? 'h3' : 'h2'}
              className={classes.title}
            >
              A Simple Bookmark Manager
            </Typography>
            <Typography
              variant='body'
              align={matchesMD ? 'center' : 'left'}
              paragraph
              gutterBottom='false'
              className={classes.description}
            >
              A clean and simple interface to organize your favorite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </Typography>
            <Box
              sx={{
                padding: '2rem 0',
                // width: '100%',
                display: 'flex',
                justifyContent: matchesMD ? 'center' : 'left',
              }}
            >
              <Button
                variant='contained'
                className={classes.chromeButton}
                onMouseEnter={() => setSelected(true)}
                onMouseLeave={() => setSelected(false)}
              >
                Get it on Chrome
              </Button>
              <Button
                variant='text'
                className={classes.firefoxButton}
                onMouseEnter={() => setSelected(true)}
                onMouseLeave={() => setSelected(false)}
              >
                Get it on Firefox
              </Button>
            </Box>
          </Box>
        </Grid>
        {!matchesMD && switchBlock}
      </Grid>
    </Box>
  );
}

export default HeroBlock;
