import React from 'react';

import classes from './Ticket.module.scss';
import { add, format } from 'date-fns';
import TicketInfo from '../TicketInfo';

const Ticket = ({ ticket }) => {
  const splitWay = ticket.segments.map((segment) => {
    const way = { ...segment };

    way.start = format(new Date(segment.date), 'HH:mm');
    way.end = format(add(new Date(segment.date), { minutes: new Date(segment.duration) }), 'HH:mm');
    way.hours = Math.floor(segment.duration / 60);
    way.minutes = segment.duration - way.hours * 60;
    way.stopsText = way.stops.length === 0 ? 'Пересадок' : way.stops.length === 1 ? 'Пересадка' : 'Пересадки';

    return way;
  });

  return (
    <article className={classes.ticket}>
      <div className={classes['ticket__header']}>
        <span>{ticket.price.toLocaleString('ru')} р</span>
        <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt="carrier logo" />
      </div>
      <div className={classes['ticket__main']}>
        <TicketInfo wayInfo={splitWay[0]} />
        <TicketInfo wayInfo={splitWay[1]} />
      </div>
    </article>
  );
};

export default Ticket;
