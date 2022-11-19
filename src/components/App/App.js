import React from 'react';

import logo from '../../images/logo.svg';
import TicketsFilter from '../TicketsFiter';
import Buttons from '../Buttons';
import TicketsList from '../TicketsList';
import classes from './App.module.scss';
import LoadingProgress from '../LoadingProgress';

const App = () => {
  const buttons = [
    { name: 'cheapest', label: 'Самый дешевый' },
    { name: 'fastest', label: 'Самый быстрый' },
    { name: 'optimal', label: 'Оптимальный' },
  ];

  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <img src={logo} alt="aviasales" />
      </header>
      <LoadingProgress />
      <main className={classes.main}>
        <aside className={classes['main__sidebar']}>
          <TicketsFilter />
        </aside>
        <section className={classes['main__content']}>
          <Buttons buttons={buttons} />
          <TicketsList />
        </section>
      </main>
    </div>
  );
};

export default App;
