import React from 'react';
import styles from "./homeStyles.module.css"
import { toast } from 'react-toastify'

const Home = () => {
  // toast.info('Explore on your own or AI Chat?', {
  //   position: "top-center",
  //   autoClose: 4000,
  //   hideProgressBar: true,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "dark",
  //   });
  return (

      <main className={`${styles.flexHome} ${styles.bodyHome}`}>
        <div className={`${styles.earth} ${styles.filterHome}`}></div>
        <div className={styles.space}></div>
      </main>

  );
}

export default Home;
