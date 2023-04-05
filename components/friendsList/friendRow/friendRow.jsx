import styles from "./friendRow.module.css";

import FriendTag from "./friendTag";

const FriendRow = ({ loading, name, status, email, phone }) => {
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loadingWrapper}>
          <div className={styles.loadingTopLeft} />
          <div className={styles.loadingTopRight} />
          <div className={styles.loadingBottomLeft} />
          <div className={styles.loadingBottomRight} />
        </div>
      ) : (
        <div>
          <div className={styles.title}>
            {name}
            {status && <FriendTag status={status} />}
          </div>
          <div className={styles.info}>
            {email} &#x2022; {phone}
          </div>
        </div>
      )}
    </div>
  );
};

export default FriendRow;
