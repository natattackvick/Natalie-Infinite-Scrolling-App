import React, { useEffect, useState } from "react";
import styles from "./friends.module.css";
import FriendsList from "@/components/friendsList";

const Friends = () => {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    fetch("/api/friends")
      .then(res => res.json())
      .then(data => setFriendsList(data));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.filterToggle}>Filter</div>
      <FriendsList list={friendsList} />
    </div>
  );
};

export default Friends;
