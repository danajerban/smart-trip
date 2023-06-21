import styles from "./homeStyles.module.css"
import React from "react";

const Home = () => {

  return (

      <main className={`${styles.flexHome} ${styles.bodyHome}`}>
        <div className={`${styles.earth} ${styles.filterHome}`}></div>
        <div className={styles.space}></div>
      </main>

  );
}

export default Home;
