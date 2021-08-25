// Модули
import React from 'react';
import PropTypes from 'prop-types';

// Стили
import styles from './Profile.module.css';


const Profile = ({name, tag, location, url, followers, views, likes}) => (   
        <div className={styles.profile}>
            <div >
                <img
                    src={url}
                    alt="Аватар пользователя"
                    className={styles.avatar}
                />
                <p className={styles.name}>{name}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>

            <ul className={styles.stats}>
                <li className={styles.item}>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{followers}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}>{views}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>{likes}</span>
                </li>
            </ul>
        </div>    
);

Profile.defaultProps = {
    url: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
};

Profile.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};

export default Profile;