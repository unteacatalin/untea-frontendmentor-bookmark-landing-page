import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { makeStyles } from 'tss-react/mui';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import cls from 'classnames';

import Bookmark from '../../store/bookmark-context';
import LogoHeader from '../../components/images/logo-header';
import IconFacebook from '../../components/images/icon-facebook';
import IconTwitter from '../../components/images/icon-twitter';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: '100%',
      backgroundColor: theme.palette.common.very_dark_blue,
      padding: '1rem 25rem',
      [theme.breakpoints.down('xxl')]: {
        padding: '1rem 15rem',
      },
      [theme.breakpoints.down('xl')]: {
        padding: '1rem 10.3rem',
      },
      [theme.breakpoints.down('lg')]: {
        padding: '1rem 5rem',
      },
      [theme.breakpoints.down('md')]: {
        padding: '1rem 2rem',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '1rem',
      },
    },
    line: {
      // height: '25px',
      padding: '1.5rem 0 1rem 0',
    },
    cell: {
      paddingTop: 0,
      color: theme.palette.common.white,
      [theme.breakpoints.down('md')]: {
        paddingTop: '2rem',
      },
    },
    cellSelected: {
      color: theme.palette.secondary.main,
    },
    logoContainer: {
      height: '25px',
      width: '148px',
      padding: 0,
      margin: 0,
      minWidth: '148',
      [theme.breakpoints.down('md')]: {
        // marginRight: 'auto',
      },
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    footerWrapper: {
      width: '100%',
      display: 'flex',
      // borderTop: `1px solid ${theme.palette.common.white}`,
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.common.white,
      fontSize: '0.5rem',
      padding: '0.3rem 0 0 0',
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.5rem',
        padding: '0.3rem 0 0 0',
      },
    },
    link: {
      color: theme.palette.secondary.main,
    },
    drawerIconWrapper: {
      width: '24px',
      height: '24px',
      minWidth: '24px',
      padding: 0,
      margin: '0.5rem 1rem 0.5rem 1rem',
    },
  };
});

function Footer() {
  const { classes } = useStyles();
  const BookmarkCtx = useContext(Bookmark);
  const [value, setValue] = useState(BookmarkCtx.selected);
  const [valueMedia, setValueMedia] = useState(false);
  const matchesMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const router = useRouter();
  const theme = useTheme();

  useEffect(() => {
    setValue(BookmarkCtx.selected);
  }, [BookmarkCtx]);

  useEffect(() => {
    if (router.pathname === '/features' && value !== 0) {
      BookmarkCtx.updateSelected(0);
    } else if (router.pathname === '/pricing' && value !== 1) {
      BookmarkCtx.updateSelected(1);
    } else if (router.pathname === '/contact' && value !== 2) {
      BookmarkCtx.updateSelected(2);
    } else if (router.pathname === '/login' && value !== 3) {
      BookmarkCtx.updateSelected(3);
    } else if (router.pathname === '/' && !value) {
      BookmarkCtx.updateSelected(false);
    }
  }, [router, value]);

  return (
    <footer className={classes.container}>
      <Grid item container sm={12}>
        <Grid
          item
          container
          sm={12}
          className={classes.line}
          alignItems='center'
        >
          <Grid
            item
            container
            xxxl={2}
            xxl={2}
            lg={3}
            md={3}
            sm={12}
            justifyContent={matchesMD ? 'center' : 'flex-start'}
          >
            <Button
              component={Link}
              href='/'
              disableRipple
              className={classes.logoContainer}
              onClick={() => {
                setValue(false);
              }}
            >
              <LogoHeader color={theme.palette.common.white} />
            </Button>
          </Grid>
          <Grid
            item
            container
            xxxl={1}
            xxl={2}
            lg={2}
            md={2}
            sm={12}
            className={cls(classes.cell, value === 0 && classes.cellSelected)}
            justifyContent={matchesMD ? 'center' : 'flex-start'}
            alignItems='center'
          >
            <Typography component={Link} href='/features'>
              FEATURES
            </Typography>
          </Grid>
          <Grid
            item
            container
            xxxl={1}
            xxl={2}
            lg={2}
            md={2}
            sm={12}
            className={cls(classes.cell, value === 1 && classes.cellSelected)}
            justifyContent={matchesMD ? 'center' : 'flex-start'}
          >
            <Typography component={Link} href='/pricing'>
              PRICING
            </Typography>
          </Grid>
          <Grid
            item
            container
            xxxl={1}
            xxl={2}
            lg={2}
            md={2}
            sm={12}
            className={cls(classes.cell, value === 2 && classes.cellSelected)}
            justifyContent={matchesMD ? 'center' : 'flex-start'}
          >
            <Typography component={Link} href='/contact'>
              CONTACT
            </Typography>
          </Grid>
          <Grid
            item
            container
            xxxl={7}
            xxl={4}
            lg={3}
            md={3}
            sm={12}
            className={classes.cell}
            justifyContent={matchesMD ? 'center' : 'flex-end'}
          >
            <Button
              className={classes.drawerIconWrapper}
              disableRipple
              onMouseEnter={() => setValueMedia(0)}
              onMouseLeave={() => setValueMedia(false)}
            >
              <IconFacebook
                color={
                  valueMedia === 0
                    ? theme.palette.secondary.main
                    : theme.palette.common.white
                }
              />
            </Button>
            <Button
              className={classes.drawerIconWrapper}
              disableRipple
              onMouseEnter={() => setValueMedia(1)}
              onMouseLeave={() => setValueMedia(false)}
            >
              <IconTwitter
                color={
                  valueMedia === 1
                    ? theme.palette.secondary.main
                    : theme.palette.common.white
                }
              />
            </Button>
          </Grid>
        </Grid>
        <Grid item container sm={12}>
          <div className={classes.footerWrapper}>
            Challenge by&nbsp;
            <Link
              href='https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29/hub'
              target='_blank'
              className={classes.link}
            >
              Frontend Mentor
            </Link>
            . Coded by&nbsp;
            <Link
              href='https://untea-rocmu-it.herokuapp.com/'
              target='_blank'
              className={classes.link}
            >
              Catalin Marius Untea
            </Link>
            .
          </div>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
