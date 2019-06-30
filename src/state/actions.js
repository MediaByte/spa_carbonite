import { 
  REQUEST_DATA_PENDING, 
  REQUEST_DATA_SUCCESS, 
  REQUEST_DATA_FAILED, 
  SEARCH_CHANGE,
  ON_SEARCH_CHANGE_FILTER_RESULTS, 
  ON_SEARCH_CHANGE_FILTER_NULL,
  SORT_DATA,
} from './constants';

import { 
  apiCall,
  filterData 
} from './api/api';

export const sortData = (event) => ({ type: SORT_DATA, payload: event });

export const onSearchChange = (input) => (dispatch) => dispatch(({ type: SEARCH_CHANGE, payload: input }));

export const requestUsers = (api) => (dispatch) => {
  dispatch({ type: REQUEST_DATA_PENDING });
  apiCall(api)
    .then(data => dispatch({ type: REQUEST_DATA_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_DATA_FAILED, payload: error }));
};

export const onSearchChangeResults = (companies, data) => (dispatch) => 
  data 
    ? dispatch({ 
        type: ON_SEARCH_CHANGE_FILTER_RESULTS, 
        payload: filterData(companies, data)
      })
    : dispatch({ 
      type: ON_SEARCH_CHANGE_FILTER_NULL, 
      payload: []
    });
