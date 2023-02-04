import { makeStyles } from 'tss-react/mui';

import Header from './header';
import Footer from './footer';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    spacer: {
      marginBottom: '5rem',
      [theme.breakpoints.down('lg')]: {
        marginBottom: '5rem',
      },
      [theme.breakpoints.down('md')]: {
        marginBottom: '5rem',
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: '2rem',
      },
    },
    main: {
      minHeight: 'calc(100vh - 94px - 32px - 64px - 80px)',
      width: '100%',
      [theme.breakpoints.down('md')]: {
        minHeight: 'calc(100vh - 64px - 80px - 318.8px - 32px)',
      },
      [theme.breakpoints.down('sm')]: {
        minHeight: 'calc(100vh - 56px - 32px - 318.8px - 32px)',
      },
    },
  };
});

function Layout({ children }) {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.spacer} />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
