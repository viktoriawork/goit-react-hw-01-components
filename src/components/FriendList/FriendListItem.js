// Модули
import React from 'react';
import PropTypes from 'prop-types';

// Стили
import styles from './FriendListItem.module.css';


const FriendListItem = ({ avatar, name, isOnline }) =>
    <li className={styles.item}>
      <span className={isOnline ? styles.statusOnline : styles.status} />
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
   

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}

export default FriendListItem;







// const FriendListItem = ({ friends }) =>
//   friends.map(({avatar, name, isOnline, id }) => (
//     <li key={id} className={styles.item}>
//       <span className={isOnline ? styles.statusOnline : styles.status} />
//       <img className={styles.avatar} src={avatar} alt={name} width="48" />
//       <p className={styles.name}>{name}</p>
//     </li>
//   )); 

// FriendListItem.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// };