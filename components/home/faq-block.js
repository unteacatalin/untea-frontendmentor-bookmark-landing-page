import { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
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
    listFAQs: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    listItemButton: {
      '& .MuiSvgIcon-root': {
        color: theme.palette.primary.main,
      },
    },
    listItemButtonSelected: {
      '& .MuiSvgIcon-root': {
        color: theme.palette.secondary.main,
      },
    },
    listQuestionTitle: {
      '& .MuiListItemText-primary': {
        fontWeight: 700,
        '&:hover': {
          color: theme.palette.secondary.main,
        },
      },
    },
    button: {
      textTransform: 'none',
      fontSize: '0.9rem',
      width: '7rem',
      height: '3rem',
      fontWeight: 700,
      letterSpacing: '0.02rem',
      backgroundColor: theme.palette.primary.main,
      transition: 'background-color 1s',
      [theme.breakpoints.down('lg')]: {
        letterSpacing: 0,
        fontSize: '0.75rem',
      },
      [theme.breakpoints.down('md')]: {
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
  };
});

function FaqBlock() {
  const [open, setOpen] = useState(false);
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Box
        sx={{
          paddingBottom: '3rem',
        }}
      >
        <Typography variant='h3' textAlign='center' className={classes.title}>
          Frequently Asked Questions
        </Typography>
        <Typography
          variant='body'
          className={classes.description}
          align='center'
          paragraph
          gutterBottom='false'
        >
          Here are some of our FAQs. If you have any other questions
          <br />
          you&#39;d like answered please feel free to email us.
        </Typography>
      </Box>
      <Box className={classes.listFAQs}>
        <List
          sx={{
            width: '100%',
            maxWidth: 600,
            bgcolor: 'background.paper',
          }}
        >
          <ListItemButton
            onClick={() => setOpen(open === 1 ? false : 1)}
            disableRipple
            className={cls(
              classes.listItemButton,
              open === 1 && classes.listItemButtonSelected
            )}
          >
            <ListItemText
              primary='What is Bookmark?'
              className={classes.listQuestionTitle}
            />
            {open === 1 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open === 1} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItemButton>
                <ListItemText primary='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton
            onClick={() => setOpen(open === 2 ? false : 2)}
            disableRipple
            className={cls(
              classes.listItemButton,
              open === 2 && classes.listItemButtonSelected
            )}
          >
            <ListItemText
              primary='How can I request a new browser?'
              className={classes.listQuestionTitle}
            />
            {open === 2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open === 2} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItemButton>
                <ListItemText primary='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton
            onClick={() => setOpen(open === 3 ? false : 3)}
            disableRipple
            className={cls(
              classes.listItemButton,
              open === 3 && classes.listItemButtonSelected
            )}
          >
            <ListItemText
              primary='Is there a mobile app?'
              className={classes.listQuestionTitle}
            />
            {open === 3 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open === 3} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItemButton>
                <ListItemText primary='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
              </ListItemButton>
            </List>
          </Collapse>
          {/* Question 4 */}
          <ListItemButton
            onClick={() => setOpen(open === 4 ? false : 4)}
            disableRipple
            className={cls(
              classes.listItemButton,
              open === 4 && classes.listItemButtonSelected
            )}
          >
            <ListItemText
              primary='What about other Chromium browsers?'
              className={classes.listQuestionTitle}
            />
            {open === 4 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open === 4} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItemButton>
                <ListItemText primary='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Box>
      <Box
        sx={{
          padding: '2rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button variant='contained' className={classes.button}>
          More Info
        </Button>
      </Box>
    </Box>
  );
}

export default FaqBlock;
