import classes from './RouteInfo.module.scss';
const RouteInfo = ({ route }) => {
  return (
    <div className={classes.route}>
      <div className={classes['route__info']}>
        <span className={classes['route__top']}>
          {route.origin} - {route.destination}
        </span>
        <span className={classes['route__bottom']}>
          {route.start} - {route.end}
        </span>
      </div>
      <div className={classes['route__info']}>
        <span className={classes['route__top']}>В пути</span>
        <span className={classes['route__bottom']}>
          {route.hours}ч {route.minutes}м
        </span>
      </div>
      <div className={classes['route__info']}>
        <span className={classes['route__top']}>
          {route.stops.length || 'Без'} {route.stopsText}
        </span>
        <span className={classes['route__bottom']}>{route.stops.join(', ') || '-'}</span>
      </div>
    </div>
  );
};

export default RouteInfo;
