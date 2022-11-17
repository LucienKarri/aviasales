import React from 'react';

import classes from './Ticket.module.scss';
import { add, format } from 'date-fns';

const Ticket = ({ ticket }) => {
  const startOne = format(new Date(ticket.segments[0].date), 'HH:mm');
  const endOne = format(
    add(new Date(ticket.segments[0].date), { minutes: new Date(ticket.segments[0].duration) }),
    'HH:mm'
  );
  const hoursOne = Math.floor(ticket.segments[0].duration / 60);
  const minutesOne = ticket.segments[0].duration - hoursOne * 60;
  return (
    <div className={classes.ticket}>
      <div className={classes['ticket__header']}>
        <span>{ticket.price}р</span>
        <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt="carrier logo" />
      </div>
      <div className={classes['ticket__main']}>
        <div className={classes.route}>
          <div className={classes['route__info']}>
            <span>
              {ticket.segments[0].origin} - {ticket.segments[0].destination}
            </span>
            <span>
              {startOne} - {endOne}
            </span>
          </div>
          <div className={classes['route__info']}>
            <span>В пути</span>
            <span>
              {hoursOne}ч {minutesOne}м
            </span>
          </div>
          <div className={classes['route__info']}>
            <span>{ticket.segments[0].stops.length} пересадок/а</span>
            <span>{ticket.segments[0].stops.join(', ')}</span>
          </div>
        </div>
        <div className={classes.route}>
          <div className={classes['route__info']}>
            <span></span>
            <span></span>
          </div>
          <div className={classes['route__info']}>
            <span></span>
            <span></span>
          </div>
          <div className={classes['route__info']}>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
