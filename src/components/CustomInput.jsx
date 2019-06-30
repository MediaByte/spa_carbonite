//Javascript framework for creating user interfaces
import React from "react";

//Material-UI resusable components
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

//State Management
import { connect } from 'react-redux';
import { onSearchChange, onSearchChangeResults, sortData } from '../state/actions';

function CustomInput(props) {
  const classes = useStyles();
  const { data, onSearchChangeResults, searchField, newData, sort, sorted } = props;
  const [textIndex, updateTextIndex] = React.useState(searchField.length);
  const handleClick = (event) => props.updateSearchField(event.target.value);
  
  React.useEffect(() => {
    if (!newData.length && searchField.length) {
      onSearchChangeResults(data, searchField);
    }
    if (newData.length && (searchField.length > textIndex)) {
      onSearchChangeResults(newData, searchField);
      updateTextIndex(searchField.length)
    }
    if ((textIndex > searchField.length) || (textIndex > searchField.length)) {
      updateTextIndex(searchField.length)
      onSearchChangeResults(data, searchField);
    }
    //eslint-disable-next-line
  }, [searchField, textIndex, sorted]);

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={props.placeholder}
        inputProps={{ "aria-label": "Filter by company name" }}
        onChange={(event) => handleClick(event)}
        value={props.searchField}
      />
      <Divider className={classes.divider} />
      <Button
        color="primary"
        className={classes.iconButton}
        aria-label="Filter"
        onClick={() => sorted ? sort(false) : sort(true)}
      >
        {sorted ? 'D' : 'A'}
      </Button>
    </Paper>
  );
};

const useStyles = makeStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400
    },
    input: {
      marginLeft: 8,
      flex: 1
    },
    iconButton: {
      padding: 10,
      margin: 'auto'
    },
    divider: {
      width: 1,
      height: 28,
      margin: 4
    }
  });

const mapStateToProps = state => {
    return {
      searchField: state.onSearchChange.inputValue,
      data: state.requestUsers.data,
      newData: state.filterData.data,
      sorted: state.sortData.sorted
    };
  };

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchField: (data) => dispatch(onSearchChange(data)),
    onSearchChangeResults: (companies, data) => dispatch(onSearchChangeResults(companies, data)),
    sort: (value) => dispatch(sortData(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomInput);