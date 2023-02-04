import React, { Fragment, useState, useEffect, useContext } from 'react';
import { makeStyles } from 'tss-react/mui';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import cls from 'classnames';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';

import LogoHeader from '../../components/images/logo-header';
import Bookmark from '../../store/bookmark-context';
import IconClose from '../../components/images/icon-close';
import IconFacebook from '../../components/images/icon-facebook';
import IconTwitter from '../../components/images/icon-twitter';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles()((theme) => {
  return {
    appBarContainer: {
      backgroundColor: theme.palette.common.white,
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
    logoContainer: {
      minHeight: '25px',
      minWidth: '148px',
      padding: 0,
      [theme.breakpoints.down('md')]: {
        marginRight: 'auto',
      },
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    toolbarMargin: {
      ...theme.mixins.toolbar,
    },
    loginTabButton: {
      border: `2px solid ${theme.palette.common.white}`,
      borderRadius: '5px',
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
      marginLeft: '2rem',
      '&:hover': {
        backgroundColor: 'transparent',
        color: theme.palette.secondary.main,
        border: `2px solid ${theme.palette.secondary.main}`,
      },
    },
    loginTabButtonSelected: {
      backgroundColor: 'transparent',
      color: theme.palette.secondary.main,
      border: `2px solid ${theme.palette.secondary.main}`,
    },
    drawerIconContainer: {
      marginLeft: 'auto',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    drawerIcon: {
      height: '2.5rem',
      width: '2.5rem',
    },
    drawer: {
      backgroundColor: theme.palette.common.very_dark_blue,
      padding: '2rem',
      width: '100%',
    },
    drawerItemButton: {
      padding: 0,
      color: theme.palette.common.white,
      height: '4rem',
    },
    loginDrawerItemButton: {
      padding: 0,
      color: theme.palette.common.white,
      height: '5rem',
    },
    drawerItemButtonSelected: {
      fontWeight: '700',
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.common.cyan,
      borderRadius: '50px',
      '&:hover': {
        backgroundColor: theme.palette.common.cyan,
      },
    },
    listItemText: {
      textAlign: 'center',
      padding: '0.2rem 0',
      letterSpacing: '0.2rem',
    },
    loginListItemText: {
      border: `1px solid ${theme.palette.common.white}`,
      height: '3rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginListItemTextSelected: {
      border: `1px solid ${theme.palette.secondary.main}`,
    },
    rightAlign: {
      marginLeft: 'auto',
    },
    divider: {
      borderColor: theme.palette.common.grayish_blue,
    },
    drawerHeaderContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    closeContainer: {
      width: '16px',
      height: '15px',
    },
    closeButton: {
      padding: 0,
      margin: 0,
      minWidth: '16px',
      paddingBottom: '3rem',
    },
    logoButton: {
      padding: 0,
      margin: 0,
      minWidth: '148px',
      paddingBottom: '3rem',
    },
    drawerIconWrapper: {
      width: '24px',
      height: '24px',
      minWidth: '24px',
      padding: 0,
      margin: '10rem 1rem 1rem 1rem',
      direction: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    drawerSocialMediaWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
});

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className='MuiTabs-indicatorSpan' /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'none',
  },
  '&.MuiTabs-root': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  '& .MuiTabs-flexContainer': {
    display: 'block',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    fontSize: theme.typography.pxToRem(15),
    marginLeft: theme.spacing(1),
    color: theme.palette.common.black,
    fontWeight: 700,
    height: '2.5rem',
    minHeight: '2.5rem',
    width: '7rem',
    [theme.breakpoints.down('xl')]: {
      fontSize: theme.typography.pxToRem(13),
    },
    '&.Mui-selected': {
      color: theme.palette.secondary.main,
    },
    ':hover': {
      color: theme.palette.secondary.main,
    },
  })
);

function Header() {
  const { classes } = useStyles();
  const BookmarkCtx = useContext(Bookmark);
  const matchesMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const [value, setValue] = useState(false);
  const [valueMedia, setValueMedia] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const router = useRouter();
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

  const tabs = (
    <StyledTabs
      value={value}
      onChange={handleChange}
      variant='fullWidth'
      className={classes.rightAlign}
    >
      <StyledTab label='FEATURES' component={Link} href='/features' />
      <StyledTab label='PRICING' component={Link} href='/pricing' />
      <StyledTab label='CONTACT' component={Link} href='/contact' />
      <StyledTab
        label='LOGIN'
        component={Link}
        href='/login'
        className={cls(
          classes.loginTabButton,
          value === 3 && classes.loginTabButtonSelected
        )}
      />
    </StyledTabs>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        anchor='top'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.drawerHeaderContainer}>
          <Button
            onClick={() => {
              setOpenDrawer(false);
              setValue(false);
            }}
            component={Link}
            href='/'
            className={classes.logoButton}
          >
            <div className={classes.logoContainer}>
              <LogoHeader
                color={theme.palette.common.white}
                color2={theme.palette.common.white}
                color3={theme.palette.common.very_dark_blue}
              />
            </div>
          </Button>
          <Button
            onClick={() => {
              setOpenDrawer(false);
              setValue(false);
            }}
            className={classes.closeButton}
          >
            <div className={classes.closeContainer}>
              <IconClose color={theme.palette.common.white} />
            </div>
          </Button>
        </div>
        <List disablePadding>
          <Divider className={classes.divider} />
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            component={Link}
            href='/features'
            disablePadding
            className={cls(
              classes.drawerItemButton,
              value === 0 && classes.drawerItemButtonSelected
            )}
          >
            <ListItemText disableTypography className={classes.listItemText}>
              FEATURES
            </ListItemText>
          </ListItemButton>
          <Divider className={classes.divider} />
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            component={Link}
            href='/pricing'
            disablePadding
            className={cls(
              classes.drawerItemButton,
              value === 1 && classes.drawerItemButtonSelected
            )}
          >
            <ListItemText disableTypography className={classes.listItemText}>
              PRICING
            </ListItemText>
          </ListItemButton>
          <Divider className={classes.divider} />
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            divider
            component={Link}
            href='/contact'
            disablePadding
            className={cls(
              classes.drawerItemButton,
              value === 2 && classes.drawerItemButtonSelected
            )}
          >
            <ListItemText disableTypography className={classes.listItemText}>
              CONTACT
            </ListItemText>
          </ListItemButton>
          <Divider className={classes.divider} />
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            component={Link}
            href='/login'
            disablePadding
            className={cls(
              classes.loginDrawerItemButton,
              value === 3 && classes.drawerItemButtonSelected
            )}
          >
            <ListItemText
              disableTypography
              className={cls(
                classes.listItemText,
                classes.loginListItemText,
                value === 3 && classes.loginListItemTextSelected
              )}
            >
              LOGIN
            </ListItemText>
          </ListItemButton>
        </List>
        <div className={classes.drawerSocialMediaWrapper}>
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
        </div>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar className={classes.appBarContainer} position='fixed'>
          <Toolbar disableGutters>
            <Button
              component={Link}
              href='/'
              disableRipple
              className={classes.logoContainer}
              onClick={() => {
                setOpenDrawer(false);
                setValue(false);
              }}
            >
              <LogoHeader />
            </Button>
            {matchesMD ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
}

export default Header;
