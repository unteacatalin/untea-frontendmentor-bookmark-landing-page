import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';
import cls from 'classnames';
import Button from '@mui/material/Button';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: '100%',
      padding: '2.5rem 25rem',
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
      paddingBottom: '1rem',
    },
    description: {
      color: theme.palette.common.grayish_blue,
      padding: '0.5rem 0 1rem 0',
      lineHeight: '1.9rem',
    },
    gridCell: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '30rem',
      [theme.breakpoints.down('md')]: {
        height: '25rem',
      },
    },
    leftGridCell: {
      justifyContent: 'flex-start',
    },
    rightGridCell: {
      justifyContent: 'flex-end',
    },
    minVersionText: {
      width: '100%',
      color: theme.palette.common.grayish_blue,
      fontSize: '0.9rem',
      textAlign: 'center',
      paddingTop: '1rem',
    },
    button: {
      textTransform: 'none',
      fontSize: '0.9rem',
      width: '15rem',
      height: '3rem',
      fontWeight: 700,
      letterSpacing: '0.02rem',
      backgroundColor: theme.palette.primary.main,
      transition: 'background-color 1s',
      '&.MuiButton-root': {
        '&:hover': {
          backgroundColor: 'transparent',
          border: `1px solid ${theme.palette.primary.main}`,
          color: theme.palette.primary.main,
          transition: 'background-color 1s',
        },
      },
    },
    image: {
      padding: '2rem',
    },
    imageWrapper: {
      width: '100%',
      borderBottom: `4px dotted ${theme.palette.common.grayish_blue}`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '3rem',
      marginBottom: '2rem',
      paddingBottom: '2rem',
    },
  };
});

function DownloadBlock() {
  const { classes } = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Box className={classes.container}>
      <Box
        sx={{
          paddingBottom: '3rem',
        }}
      >
        <Typography variant='h3' textAlign='center' className={classes.title}>
          Download the extension
        </Typography>
        <Typography
          variant='body'
          className={classes.description}
          align='center'
          paragraph
          gutterBottom='false'
        >
          We&#39;ve got more browsers in the pipeline. Please do let us know if
          <br />
          you&#39;ve got a favourite you&#39;d like us to prioritize.
        </Typography>
      </Box>
      <Grid item container xs={12} spacing={matchesMD ? 0 : 5}>
        <Grid
          item
          container
          lg={4}
          md={12}
          className={cls(classes.gridCell, classes.leftGridCell)}
        >
          <Box className={classes.imageWrapper}>
            <Image
              src='logo-chrome.svg'
              alt='chrome logo'
              width={176}
              height={176}
              className={classes.image}
            />
            <Typography variant='h4'>Add to Chrome</Typography>
            <Typography variant='body' className={classes.minVersionText}>
              Minimum version 62
            </Typography>
          </Box>
          <Button variant='contained' className={classes.button}>
            Add and Install Extension
          </Button>
        </Grid>
        <Grid item container lg={4} md={12} className={classes.gridCell}>
          <Box className={classes.imageWrapper}>
            <Image
              src='logo-firefox.svg'
              alt='firefox logo'
              width={176}
              height={176}
              className={classes.image}
            />
            <Typography variant='h4'>Add to Firefox</Typography>
            <Typography variant='body' className={classes.minVersionText}>
              Minimum version 55
            </Typography>
          </Box>
          <Button variant='contained' className={classes.button}>
            Add and Install Extension
          </Button>
        </Grid>
        <Grid
          item
          container
          lg={4}
          md={12}
          className={cls(classes.gridCell, classes.rightGridCell)}
        >
          <Box className={classes.imageWrapper}>
            <Image
              src='logo-opera.svg'
              alt='opera logo'
              width={176}
              height={176}
              className={classes.image}
            />
            <Typography variant='h4'>Add to Opera</Typography>
            <Typography variant='body' className={classes.minVersionText}>
              Minimum version 46
            </Typography>
          </Box>
          <Button variant='contained' className={classes.button}>
            Add and Install Extension
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DownloadBlock;
