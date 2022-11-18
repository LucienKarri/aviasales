import React from 'react';

import logo from '../../images/logo.svg';
import TicketsFilter from '../TicketsFiter';
import TicketsSorter from '../TicketsSorter';
import TicketsList from '../TicketsList';
import classes from './App.module.scss';

const App = () => {
  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <img src={logo} alt="aviasales" />
      </header>
      <main className={classes.main}>
        <aside className={classes['main__sidebar']}>
          <TicketsFilter />
        </aside>
        <section className={classes['main__content']}>
          <TicketsSorter />
          <TicketsList />
        </section>
      </main>
    </div>
  );
};

export default App;
