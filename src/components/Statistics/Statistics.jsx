import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import getRandomColor from '../../utils/randomColorGenerator';

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(status => (
          <li
            key={status.id}
            className={s.item}
            style={{ background: getRandomColor() }}
          >
            <span className={s.label}>{status.label}</span>
            <span className={s.percentage}> {status.percentage} &#37;</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};

export default Statistics;
