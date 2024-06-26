// LoaderScreen.jsx

import React from 'react';
import styles from '@/app/packages/ui/styles/LoaderScreenAdmin.module.css';

const LoaderScreen = () => {
  return (
    <div className={styles.PageWrapper}>
      <div className={styles.PurpleLoadingLine}>
        <div className={styles.PurpleLoadingLineFill}></div>
      </div>
    </div>
  );
}

export default LoaderScreen;