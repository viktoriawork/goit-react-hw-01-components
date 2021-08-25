// Модули
import React from 'react';
import PropTypes from 'prop-types';

// Компоненты
import FriendListItem from './FriendListItem';

// Стили
import styles from './FriendList.module.css';


const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({id, avatar,name,isOnline}) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    )
    )}
  </ul>
);

FriendList.propTypes = {
    friends: PropTypes.array.isRequired
};

export default FriendList;





