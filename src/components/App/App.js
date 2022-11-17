import React from 'react';
import TicketsFilter from '../TicketsFiter';

import TicketsList from '../TicketsList';
import TicketsSorter from '../TicketsSorter';

const App = () => {
  /*
  const [searchId, setSearchId] = useState('');
  const [ticketsPack, setTicketsPack] = useState([]);

  const getTicketsPack = useCallback((searchId) => {
    aviasalesService
      .getTickets(searchId)
      .then((res) => {
        console.log(res);
        setTicketsPack((ticketsPack) => [...ticketsPack, res]);
        if (!res.stop) {
          getTicketsPack(searchId);
        }
      })
      .catch((e) => {
        console.log('error in getTicketPack() >>', e);
        getTicketsPack(searchId);
      });
  }, []);

  useEffect(() => {
    aviasalesService
      .getSearchId()
      .then((res) => {
        console.log(res.searchId);
        setSearchId(res.searchId);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (searchId) {
      getTicketsPack(searchId);
    }
  }, [searchId, getTicketsPack]);

  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.searchId);
  const tickets = useSelector((state) => state.tickets);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(getSearchId());
  }, [dispatch]);

  useEffect(() => {
    if (searchId && isLoading) {
      dispatch(getTickets(searchId));
    }
  }, [dispatch, isLoading, searchId, tickets]);
*/

  return (
    <div>
      <h1>Hello hell</h1>
      <h2>Coming son...</h2>
      <h3>god!?</h3>
      <TicketsFilter />
      <TicketsSorter />
      <TicketsList />
    </div>
  );
};

export default App;
