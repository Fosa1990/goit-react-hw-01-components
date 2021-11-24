import React from 'react';
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
  username: 'unknown user',
  tag: 'no tag',
  location: 'no location',
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  followers: '0',
  views: '0',
  likes: '0',
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
