import React from 'react';

//Material-UI resuable components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import CustomButton from './CustomButton.jsx';

//State Management
import { connect } from 'react-redux';
import { requestUsers } from '../state/actions';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    background: 'rgb(211,211,211)',
  },
  title: {
    flexGrow: 1,
    color: 'black'
  },
  button: {
    color: 'black'
  }
}));

function CustomHeader(props) {
  const classes = useStyles();
  const { fetchUserData } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.header} position="absolute">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Carbonite
          </Typography>
          <CustomButton className={classes.button} fetchUsers={() => fetchUserData(process.env.REACT_APP_API_LINK)} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dataLoading: state.requestUsers.progress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: (link) => dispatch(requestUsers(link))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomHeader);