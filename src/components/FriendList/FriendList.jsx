import PropTypes from 'prop-types';
import styles from './FriendList.module.css'

const FriendList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map(friend => (
      <li className={styles.item} key={friend.id}> 
        <span className={friend.isOnline ? styles.statusOnline : styles.statusOffline}></span>
        <img className={styles.avatar} src={friend.avatar} alt={friend.name} width="48" />
        <p class="name">{friend.name}</p>
      </li>
    ))};
  </ul>
);

FriendList.defaultProps = {
    avatar: 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder'
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendList;

