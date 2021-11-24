import React from 'react';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friendsData }) => {
  return (
    friendsData.length > 0 && (
      <ul className={styles.friendList}>{friendsData.map(FriendListItem)}</ul>
    )
  );
};

export default FriendList;
