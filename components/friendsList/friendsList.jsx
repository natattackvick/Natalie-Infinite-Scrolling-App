import styles from "./friendsList.module.css";
import FriendRow from "./friendRow";

const FriendsList = ({ loading, rowsLoading, list }) => {
  // todo: loading logic into own component
  const loadScroll = rowsLoading ? "LoadScroll" : "";

  const loadingRows = 10;
  const loadingSkeleton = [...Array(loadingRows).keys()].map(num => {
    return <FriendRow loading={loading} key={num} />;
  });

  const friendsArray =
    list &&
    list.length > 0 &&
    list.map(friend => {
      return (
        <FriendRow
          loading={loading}
          key={friend.email}
          name={friend.name}
          status={friend.status}
          email={friend.email}
          phone={friend.phone}
        />
      );
    });

  return (
    <div
      id={"friendsListComponent"}
      className={styles["container" + loadScroll]}
    >
      {loading ? loadingSkeleton : friendsArray}
    </div>
  );
};

export default FriendsList;
