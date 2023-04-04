import styles from "./friendsList.module.css";
import FriendRow from "./friendRow";

const FriendsList = ({ list }) => {
  const friendsArray = list.map(friend => {
    return (
      <FriendRow
        key={friend.email}
        name={friend.name}
        status={friend.status}
        email={friend.email}
        phone={friend.phone}
      />
    );
  });

  return <div className={styles.container}>{friendsArray}</div>;
};

export default FriendsList;
