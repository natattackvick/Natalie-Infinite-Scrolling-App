import styles from "./friendTag.module.css";

const FriendTag = ({ status }) => {
  const color = status === "close" ? "blue" : "green";
  const title = status === "close" ? "Close Friends" : "Super Close Friends";

  return <div className={styles[color + "Container"]}>{title}</div>;
};

export default FriendTag;
