//Javascript framework for creating user interfaces
import React from 'react';

//Material-UI resuable components
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//State Management
import { connect } from 'react-redux';
import { onSearchChangeResults } from '../state/actions';

//Custom module
import CustomInput from './CustomInput.jsx'

function CustomTable(props) {
  const { data, dataReady, searchField, filterData , sorted, sortData } = props;
  const classes = useStyles();
  const [timeToSort, sortIt] = React.useState(sorted);

  React.useEffect(() => {
    sortData(data)
    sortIt(!timeToSort)
    //eslint-disable-next-line
  }, [sorted])

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              {
                dataReady 
                  ? <CustomInput className={classes.input} placeholder={'Company Name'} /> 
                  : 'Company Name'
              }
            </TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Website</TableCell>
            <TableCell>City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { (dataReady && !searchField.length)
              ?  <FilterCells data={data} />
              : searchField.length
                ? <FilterCells data={filterData} />
                : null
          }
        </TableBody>        
      </Table>
    </Paper>
  );
};

const FilterCells = (props) => (
  props.data.map(row => (
    <TableRow key={row.company.name}>
      <TableCell component="th" scope="row">
          {row.company.name}
      </TableCell>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.website}</TableCell>
      <TableCell>{row.address.city}</TableCell>
    </TableRow>))
);

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10),
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 0,
    overflowX: 'auto',
    
  },
  table: {
    minWidth: 400,
  },
  input: {
    margin:0
  },
}));

const mapStateToProps = state => {
  return {
    data: state.requestUsers.data,
    dataReady: state.requestUsers.dataReady,
    searchField: state.onSearchChange.inputValue,
    filterData: state.filterData.data,
    sorted: state.sortData.sorted
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChangeResults: (companies, data) => dispatch(onSearchChangeResults(companies, data)),
    sortData: (companies, data) => dispatch(onSearchChangeResults(companies.reverse(), data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomTable)