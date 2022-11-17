import React from 'react';
import TicketsFilter from '../TicketsFiter';

import TicketsList from '../TicketsList';
import TicketsSorter from '../TicketsSorter';

const App = () => {
  return (
    <div>
      <TicketsFilter />
      <TicketsSorter />
      <TicketsList />
    </div>
  );
};

export default App;
