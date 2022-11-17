import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchId, getTickets } from '../../actions';
import Ticket from '../Ticket';
import { v4 as uuidv4 } from 'uuid';

const TicketsList = () => {
  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.searchId);
  const isLoading = useSelector((state) => state.isLoading);
  const tickets = useSelector((state) => state.tickets);
  const sortType = useSelector((state) => state.sortType);
  const filters = useSelector((state) => state.filtersList);

  useEffect(() => {
    if (!searchId) {
      dispatch(getSearchId());
    } else if (isLoading) {
      dispatch(getTickets(searchId));
    }
  }, [dispatch, isLoading, searchId, tickets]);

  const sortingList = (arr, sortType) => {
    switch (sortType) {
      case 'cheapest':
        return arr.sort((prev, next) => prev.price - next.price);
      case 'fastest':
        return arr.sort((prev, next) => prev.totalTime - next.totalTime);
      case 'optimal':
        return arr.sort((prev, next) => prev.optimalValue - next.optimalValue);
      default:
        return arr;
    }
  };

  const transformTickets = tickets.map((ticket) => {
    ticket.id = uuidv4();
    ticket.totalTime = ticket.segments.reduce((total, { duration }) => total + duration, 0);
    ticket.optimalValue = ticket.totalTime + ticket.price;
    ticket.stops = Math.max(ticket.segments[0].stops.length, ticket.segments[1].stops.length);

    return ticket;
  });

  const transformFilters = filters.reduce((total, filter) => {
    if (filter.selected && filter.name !== 'all') {
      total.push(Number(filter.name));
    }
    return total;
  }, []);

  const filteredTickets = transformTickets.reduce((res, ticket) => {
    if (transformFilters.includes(ticket.stops)) {
      res.push(ticket);
    }
    return res;
  }, []);

  const sortedList = sortingList(filteredTickets, sortType)
    .slice(0, 5)
    .map((ticket) => {
      return (
        <li key={ticket.id}>
          <Ticket ticket={ticket} />
        </li>
      );
    });

  return (
    <>
      <h2>{tickets.length}</h2>
      <ul>{sortedList}</ul>
    </>
  );
};

export default TicketsList;
