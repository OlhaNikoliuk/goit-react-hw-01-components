import PropTypes from 'prop-types';
import s from './Profile.module.css';

function Profile({ avatarUrl, name, tag, location, stats }) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatarUrl} alt="Аватар пользователя" className={s.avatar} />
        <p className={`${s.name}`}>{name}</p>
        <p className={`${s.tag} ${s.info}`}>&#64;{tag}</p>
        <p className={`${s.location} ${s.info}`}>{location}</p>
      </div>

      <ul className={`${s.stats}`}>
        <li className={s.statsItem}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}> {stats.followers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}> {stats.views}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
