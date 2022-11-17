import { useSelector, useDispatch } from 'react-redux';

import { changeSortType } from '../../actions';

const TicketsSorter = () => {
  const dispatch = useDispatch();
  const sortType = useSelector((state) => state.sortType);

  const handleClick = (name) => {
    dispatch(changeSortType(name));
  };

  const buttons = [
    { name: 'cheapest', label: 'Самый дешевый' },
    { name: 'fastest', label: 'Самый быстрый' },
    { name: 'optimal', label: 'Оптимальный' },
  ];

  const buttonsList = buttons.map(({ name, label }) => {
    return (
      <li key={name}>
        <button type="button" onClick={() => handleClick(name)}>
          {label}
        </button>
      </li>
    );
  });

  return <ul>{buttonsList}</ul>;
};

export default TicketsSorter;
