import { 
    REQUEST_DATA_PENDING,
    REQUEST_DATA_SUCCESS,
    REQUEST_DATA_FAILED,
    SEARCH_CHANGE,
    ON_SEARCH_CHANGE_FILTER_RESULTS,
    ON_SEARCH_CHANGE_FILTER_NULL,
    SORT_DATA,
} from './constants';

const users = {
    data: [
      { 
        company: { 
          name: '' 
        }, 
        name: '', 
        website: '', 
        address: { 
          city: '' 
        } 
      },
    ],
    dataReady: false,
  };

export const requestUsers = (state=users, action={}) => {
    switch (action.type) {
      case REQUEST_DATA_PENDING:
        return Object.assign({}, state, { dataReady: false })
      case REQUEST_DATA_SUCCESS:
        return Object.assign({}, state, { data: action.payload, dataReady: true })
      case REQUEST_DATA_FAILED:
        return Object.assign({}, state, {error: action.payload})
      default:
        return state
    };
  };

const inputData = { inputValue: '' }
export const onSearchChange = (state=inputData, action={}) => {
  switch (action.type) {
    case SEARCH_CHANGE:
      return Object.assign({}, state, {inputValue: action.payload})
    default:
      return state
  };
};

const dataFilter = { data: [] }
export const filterData = (state=dataFilter, action={}) => {
  switch (action.type) {
    case ON_SEARCH_CHANGE_FILTER_RESULTS:
      return Object.assign({}, state, {data: action.payload})
    case ON_SEARCH_CHANGE_FILTER_NULL:
      return Object.assign({}, state, {data: action.payload})
    default:
      return state
  };
};

const sortPattern = { sorted: false }

export const sortData = (state=sortPattern, action={}) => {
  switch (action.type) {
    case SORT_DATA:
      return Object.assign({}, state, {sorted: action.payload})
    default:
      return state
  };
};