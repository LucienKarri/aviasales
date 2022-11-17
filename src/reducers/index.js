const initialState = {
  searchId: '',
  tickets: [],
  isLoading: true,
  sortType: 'cheapest',
  filtersList: [
    { name: 'all', label: 'Все', selected: true },
    { name: '0', label: 'Без пересадок', selected: true },
    { name: '1', label: '1 пересадка', selected: true },
    { name: '2', label: '2 пересадки', selected: true },
    { name: '3', label: '3 пересадки', selected: true },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTERS_LIST':
      return { ...state, filtersList: action.payload };
    case 'CHANGE_SORT_TYPE':
      return { ...state, sortType: action.payload };
    case 'TICKETS_LOAD':
      return { ...state, isLoading: !state.isLoading };
    case 'GET_TICKETS_PACK':
      return { ...state, tickets: [...state.tickets, ...action.payload] };
    case 'GET_SEARCH_ID':
      return { ...state, searchId: action.payload };
    default:
      return state;
  }
};

export default reducer;
