import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import ProfileStats from './ProfileStats';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={username} className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ProfileStats {...stats} />
    </div>
  );
};

Profile.defaultProps = {
  username: 'User',
  tag: 'No tag',
  location: 'No location',
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape().isRequired,
};

export default Profile;
