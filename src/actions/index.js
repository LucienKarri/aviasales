import aviasalesService from '../services/AviasalesService';

export const changeFiltersList = (filtersList) => {
  return {
    type: 'CHANGE_FILTERS_LIST',
    payload: filtersList,
  };
};

export const changeSortType = (sortType) => {
  return {
    type: 'CHANGE_SORT_TYPE',
    payload: sortType,
  };
};

export const getSearchId = () => {
  return (dispatch) => {
    aviasalesService
      .getSearchId()
      .then((res) => {
        dispatch({ type: 'GET_SEARCH_ID', payload: res.searchId });
      })
      .catch((e) => console.log(e));
  };
};

export const getTickets = (searchId) => {
  return (dispatch) => {
    aviasalesService
      .getTicketsPack(searchId)
      .then((res) => {
        dispatch({ type: 'GET_TICKETS_PACK', payload: res.tickets });
        if (res.stop) {
          dispatch({ type: 'TICKETS_LOAD' });
        }
      })
      .catch(() => {
        dispatch({ type: 'GET_TICKETS_PACK', payload: [] });
      });
  };
};
