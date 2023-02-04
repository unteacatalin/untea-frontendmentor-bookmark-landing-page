import { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import cls from 'classnames';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const dataSource = [
  {
    title: 'Bookmark in one click',
    description:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.',
    imageUrl: 'url(./illustration-features-tab-1.svg)',
  },
  {
    title: 'Intelligent search',
    description:
      'Our powerfull search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    imageUrl: 'url(./illustration-features-tab-2.svg)',
  },
  {
    title: 'Share your bookmarks',
    description:
      'Easy share your bookmarks and collections with others. Create a shareable link that you can send at a click of a button.',
    imageUrl: 'url(./illustration-features-tab-3.svg)',
  },
];

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  width: '37rem',
  '& .MuiTabs-indicator': {
    backgroundColor: 'hsl(0, 94%, 66%)',
    height: '4px',
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    minWidth: '12rem',
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: 'hsl(229, 31%, 21%)',
    fontFamily: ['Rubik', 'sans-serif'].join(','),
    fontSize: '1rem',
    '&:hover': {
      color: 'hsl(0, 94%, 66%)',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: '#000000',
      fontWeight: theme.typography.fontWeightMedium,
      '&:hover': {
        color: 'hsl(0, 94%, 66%)',
        opacity: 1,
      },
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  })
);

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: '100%',
      padding: '1rem 25rem 2rem 0',
      [theme.breakpoints.down('xxl')]: {
        padding: '1rem 15rem 2rem 0',
      },
      [theme.breakpoints.down('xl')]: {
        padding: '1rem 10.3rem 2rem 0',
      },
      [theme.breakpoints.down('lg')]: {
        padding: '1rem 5rem 2rem 0',
      },
      [theme.breakpoints.down('md')]: {
        padding: '1rem 2rem 2rem 0',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '1rem 1rem 2rem 0',
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
    listItemButtonSelected: {
      fontWeight: '500',
      color: theme.palette.common.black,
      borderRadius: '50px',
    },
    listItemButton: {
      color: theme.palette.common.grayish_blue,
      fontSize: '1rem',
      '&:hover': {
        color: theme.palette.secondary.main,
      },
    },
    listItemText: { textAlign: 'center' },
    blockTitle: {
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
    blockDescription: {
      color: theme.palette.common.grayish_blue,
      padding: '0.5rem 0 0 0',
      lineHeight: '1.9rem',
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

function FeaturesBlock() {
  const { classes } = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const matchesXS = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const matchesLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const matchesXL = useMediaQuery((theme) => theme.breakpoints.down('xl'));
  const matchesXXL = useMediaQuery((theme) => theme.breakpoints.down('xxl'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const menu = (
    <Box sx={{ bgcolor: '#fff', display: 'flex', justifyContent: 'center' }}>
      <AntTabs value={value} onChange={handleChange} aria-label='ant example'>
        <AntTab label='Simple Bookmarking' />
        <AntTab label='Speedy Searching' />
        <AntTab label='Easy Sharing' />
      </AntTabs>
    </Box>
  );

  const list = (
    <List disablePadding>
      <ListItemButton
        onClick={() => {
          setValue(0);
        }}
        disablePadding
        disableRipple
        className={cls(
          classes.listItemButton,
          value === 0 && classes.listItemButtonSelected
        )}
      >
        <ListItemText disableTypography className={classes.listItemText}>
          Simple Bookmarking
        </ListItemText>
      </ListItemButton>
      {value === 0 && (
        <Divider
          sx={{
            borderColor: theme.palette.secondary.main,
            borderWidth: '2px',
            width: '12rem',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      )}
      <Divider />
      <ListItemButton
        onClick={() => {
          setValue(1);
        }}
        disablePadding
        disableRipple
        className={cls(
          classes.listItemButton,
          value === 1 && classes.listItemButtonSelected
        )}
      >
        <ListItemText disableTypography className={classes.listItemText}>
          Speedy Searching
        </ListItemText>
      </ListItemButton>
      {value === 1 && (
        <Divider
          sx={{
            borderColor: theme.palette.secondary.main,
            borderWidth: '2px',
            width: '12rem',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      )}
      <Divider />
      <ListItemButton
        onClick={() => {
          setValue(2);
        }}
        disablePadding
        disableRipple
        className={cls(
          classes.listItemButton,
          value === 2 && classes.listItemButtonSelected
        )}
      >
        <ListItemText disableTypography className={classes.listItemText}>
          Easy Sharing
        </ListItemText>
      </ListItemButton>
      {value === 2 && (
        <Divider
          sx={{
            borderColor: theme.palette.secondary.main,
            borderWidth: '2px',
            width: '12rem',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      )}
      <Divider />
    </List>
  );

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
            left: 0,
            bottom: 0,
            backgroundColor: 'primary.main',
            borderRadius: '0 35% 35% 0',
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
            right: 0,
            top: 0,
            backgroundImage: dataSource[value].imageUrl,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '15px',
            padding: 0,
            margin: 0,
          }}
        />
      </Box>
    </Grid>
  );

  return (
    <Box className={classes.container}>
      <Box
        sx={{
          paddingLeft: '25rem',
          paddingBottom: '3rem',
          [theme.breakpoints.down('xxl')]: {
            paddingLeft: '15rem',
          },
          [theme.breakpoints.down('xl')]: {
            paddingLeft: '10.3rem',
          },
          [theme.breakpoints.down('lg')]: {
            paddingLeft: '5rem',
          },
          [theme.breakpoints.down('md')]: {
            paddingLeft: '2rem',
          },
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '1rem',
          },
        }}
      >
        <Typography variant='h3' textAlign='center' className={classes.title}>
          Features
        </Typography>
        <Typography
          variant='body'
          className={classes.description}
          align='center'
          paragraph
          gutterBottom='false'
        >
          Our aim is to make it quick and easy for you to access your
          <br />
          favorite websites. Your bookmarks syncbetween your devices
          <br />
          so you can access them on the go.
        </Typography>
        {!matchesMD ? menu : list}
      </Box>
      <Box>
        <Grid item container xs={12} spacing={matchesMD ? 0 : 10}>
          {switchBlock}
          <Grid item container md={5} sm={12}>
            <Box
              sx={{
                paddingLeft: 0,
                [theme.breakpoints.down('md')]: {
                  paddingLeft: '2rem',
                },
                [theme.breakpoints.down('sm')]: {
                  paddingLeft: '1rem',
                },
              }}
            >
              <Typography
                variant={matchesMD ? 'h3' : 'h2'}
                className={classes.blockTitle}
              >
                {dataSource[value].title}
              </Typography>
              <Typography
                variant='body'
                align={matchesMD ? 'center' : 'left'}
                paragraph
                gutterBottom='false'
                className={classes.blockDescription}
              >
                {dataSource[value].description}
              </Typography>
              <Box
                sx={{
                  padding: '2rem 0',
                  // width: '100%',
                  display: 'flex',
                  justifyContent: matchesMD ? 'center' : 'left',
                }}
              >
                <Button variant='contained' className={classes.button}>
                  More Info
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default FeaturesBlock;
