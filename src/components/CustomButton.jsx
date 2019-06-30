//Javascript framework for creating user interfaces
import React from "react";

//npm package for concatenating classes
import clsx from "clsx";

//Material-UI resuable components
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";


export default function CircularIntegration(props) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  function handleButtonClick(fetchUsers) {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        fetchUsers()
      }, 700);
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          className={buttonClassname}
          disabled={loading}
          onClick={() => handleButtonClick(props.fetchUsers)}
        >
          Load Users
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      alignItems: "center"
    },
    wrapper: {
      margin: theme.spacing(1),
      position: "relative"
    },
    buttonSuccess: {
      backgroundColor: green[300],
      "&:hover": {
        backgroundColor: green[300]
      }
    },
    buttonProgress: {
      color: green[700],
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12
    }
  }));