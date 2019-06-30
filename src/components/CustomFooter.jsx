//Javascript framework for creating user interfaces
import React from 'react';

//Material-UI Resusable components
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    footer: {
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(2),
      marginTop: 'auto',
      backgroundColor: 'white',
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%'
    },
    link: {
      cursor: 'pointer'
    }
  }));

function FooterLink() {
  const classes = useStyles();
  return (
    <Typography variant="body2">
      {'Visit '}
      <Link className={classes.link} onClick={() => window.open(process.env.REACT_APP_FOOTER_LINK)}>
        Carbonite!
      </Link>
    </Typography>
  );
};

export default function CustomFooter() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <footer className={classes.footer}>
        <FooterLink />
      </footer>
    </>
  );
};