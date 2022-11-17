import { useDispatch, useSelector } from 'react-redux';
import { changeFiltersList } from '../../actions';

const TicketsFilter = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector((state) => state.filtersList);

  const handleInputChange = ({ target }) => {
    let newArr = [];

    if (target.name === 'all') {
      newArr = currentFilters.map((filter) => {
        if (target.checked !== filter.selected) {
          filter = { ...filter, selected: target.checked };
        }
        return filter;
      });
    } else {
      const checked = currentFilters.filter((filter) => filter.selected).length;
      newArr = currentFilters.map((filter) => {
        if (filter.name === 'all' && ((checked === 5 && !target.checked) || (checked === 3 && target.checked))) {
          filter = { ...filter, selected: target.checked };
        }
        if (filter.name === target.name) {
          filter = { ...filter, selected: target.checked };
        }
        return filter;
      });
    }
    dispatch(changeFiltersList(newArr));
  };

  const filtersList = currentFilters.map(({ name, label, selected }) => {
    return (
      <li key={label}>
        <label>
          <input type="checkbox" name={name} checked={selected} onChange={(e) => handleInputChange(e)} />
          <span></span>
          {label}
        </label>
      </li>
    );
  });

  return <ul>{filtersList}</ul>;
};

export default TicketsFilter;
