import styles from "./friendRow.module.css";

import FriendTag from "./friendTag";

const FriendRow = ({ name, status, email, phone }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {name}
        {status && <FriendTag status={status} />}
      </div>
      <div className={styles.info}>
        {email} &#x2022; {phone}
      </div>
    </div>
  );
};

export default FriendRow;
