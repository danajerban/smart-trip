import styles from "./homeStyles.module.css"

const Home = () => {

  return (

      <main className={`${styles.flexHome} ${styles.bodyHome}`}>
        <div className={`${styles.earth} ${styles.filterHome}`}></div>
        <div className={styles.space}></div>
      </main>

  );
}

export default Home;
